var Reserva = require('../models/reserva');
var QuartoInstance = require('../models/quartoInstance');
var moment = require('moment');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var async = require('async');

exports.reserva_get_email = function(req, res, next) {
    Reserva.find({ 'userEmail': req.params.userEmail })
        .exec(function(err, listReservas) {
            if (err) { return next(err); } // Error in API usage.
            res.json(listReservas);
        });
};

exports.reserva_get_quarto = function(req, res, next) {
    Reserva.find({ 'quarto': req.params.quarto })
        .exec(function(err, listReservas) {
            if (err) { return next(err); } // Error in API usage.
            res.json(listReservas);
        });
};

// Handle Utilizador create.
exports.reserva_create = [

    body('userEmail', 'userEmail must not be empty.').isLength({ min: 1 }).trim(),
    body('quarto', 'quarto must not be empty.').isLength({ min: 1 }).trim(),
    body('metodoDePagamento', 'metodoDePagamento must not be empty.').isLength({ min: 1 }).trim(),
    body('morada', 'morada must not be empty.').isLength({ min: 1 }).trim(),
    body('checkIn', 'checkIn must not be empty.').optional({ checkFalsy: true }).isISO8601(),
    body('checkOut', 'checkOut must not be empty.').optional({ checkFalsy: true }).isISO8601(),

    sanitizeBody('userEmail').escape(),
    sanitizeBody('quarto').escape(),
    sanitizeBody('metodoDePagamento').escape(),
    sanitizeBody('morada').escape(),
    sanitizeBody('checkIn').toDate(),
    sanitizeBody('checkOut').toDate(),
    
    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.json({ 'message': 'Validation errors' });
        } else {

            var quartoinstance;

            QuartoInstance.find({'quarto': req.body.quarto})
                .exec(function(err, quartos){
                    if(err){return next(err);}
                console.log(quartos);
                console.log(quartos.length);
                for( var i = 0; i < quartos.length && quartoinstance === null; i++){
                    
                    var instance = quartos[i];
                    console.log(instance);

                    Reserva.find({ 'quarto': instance })
                        .sort({checkIn : 'asc'})
                        .exec(function(err, listReservas) {
                            console.log(listReservas);
                                if (err) { return next(err); }
                                if(listReservas){
                                    listReservas = new Array(listReservas);
                                    for(var i = -1;  i <listReservas.length; i++){
                                        if(i === -1){
                                            if(moment(listReservas[i+1].checkIn).isAfter(moment(req.body.checkOut))){
                                                quartoinstance = instance;
                                            }
                                        }else if(i+1 >= listReservas.length){
                                            if(moment(listReservas[i].checkOut).isBefore(moment(req.body.checkIn))){
                                                quartoinstance = instance;
                                            }
                                        }else{
                                            if(moment(listReservas[i].checkOut).isBefore(moment(req.body.checkIn)) && moment(listReservas[i+1].checkIn).isAfter(moment(req.body.checkOut))){
                                                quartoinstance = instance;
                                            }
                                        }
                                    }
                                }else{
                                    quartoinstance = instance;
                                }
                            });
                    
                };
            });

            if(quartoinstance === null){
                res.json({ 'message': 'Nao ha quartos disponiveis' });
            }else{
                var reserva = new Reserva({
                    userEmail: req.body.userEmail,
                    quarto: quartoinstance,
                    metodoDePagamento: req.body.metodoDePagamento,
                    morada: req.body.morada,
                    checkIn: req.body.checkIn,
                    checkOut: req.body.checkOut
                });


                reserva.save(function(err) {
                    if (err) { return next(err); }
                    res.json({ 'message': 'Quarto Reservado' });
                });
            }
        }
    }
];

exports.reserva_delete = function(req, res, next) {

        Reserva.deleteOne({ _id: req.body._id }, function deleteReserva(err) {
            if (err) { return next(err); }
            res.json({ 'message': 'Reserva apagada' })
        });
};

exports.reserva_update = [
    body('userEmail', 'userEmail must not be empty.').isLength({ min: 1 }).trim(),
    body('quarto', 'quarto must not be empty.').isLength({ min: 1 }).trim(),
    body('metodoDePagamento', 'metodoDePagamento must not be empty.').isLength({ min: 1 }).trim(),
    body('morada', 'morada must not be empty.').isLength({ min: 1 }).trim(),
    body('checkIn', 'checkIn must not be empty.').optional({ checkFalsy: true }).isISO8601(),
    body('checkOut', 'checkOut must not be empty.').optional({ checkFalsy: true }).isISO8601(),

    sanitizeBody('userEmail').escape(),
    sanitizeBody('quarto').escape(),
    sanitizeBody('metodoDePagamento').escape(),
    sanitizeBody('morada').escape(),
    sanitizeBody('checkIn').toDate(),
    sanitizeBody('checkOut').toDate(),
    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.json({ 'message': 'Validation errors' });
        } else {
            QuartoInstance.find({'quarto': req.body.quarto})
                          .exec(function (err, results) {

                if (err) { return next(err)};

                var quartoinstance;

                for (let instance of results) {
                    Reserva.find({ 'quarto': instance })
                           .sort([['checkIn', 'ascending']])
                           .exec(function(err, listReservas) {
                                if (err) { return next(err); }
                                if(listReservas){
                                    listReservas = new Array(listReservas);
                                    for(var i = -1;  i <listReservas.length; i++){
                                        if(i === -1){
                                            if(moment(listReservas[i+1].checkIn).isAfter(moment(req.body.checkOut))){
                                                quartoinstance = instance;
                                                break; 
                                            }
                                        }else if(i+1 >= listReservas.length){
                                            if(moment(listReservas[i].checkOut).isBefore(moment(req.body.checkIn))){
                                                quartoinstance = instance;
                                                break; 
                                            }
                                        }else{
                                            if(moment(listReservas[i].checkOut).isBefore(moment(req.body.checkIn)) && moment(listReservas[i+1].checkIn).isAfter(moment(req.body.checkOut))){
                                                quartoinstance = instance;
                                                break; 
                                            }
                                        }
                                    }
                                }else{
                                    quartoinstance = instance;
                                    break;
                                }
                            });
                    if(quartoinstance){break;}
                };

                if(quartoinstance === null){
                    res.json({ 'message': 'Não foi possivel atualizar a reserva' });
                }else{
                    var reserva = new Reserva({
                        _id: req.body._id,
                        userEmail: req.body.userEmail,
                        quarto: quartoinstance,
                        metodoDePagamento: req.body.metodoDePagamento,
                        morada: req.body.morada,
                        checkIn: req.body.checkIn,
                        checkOut: req.body.checkOut
                    });
                    
                    Reserva.replaceOne({_id: req.body._id}, reserva, function (err, theReserva) {
                        if (err) { return next(err); }
                        res.json({ 'message': 'Reserva atualizada' });
                    });
                }
            });
        }
    }
];