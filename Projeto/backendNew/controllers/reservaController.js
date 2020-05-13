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

    body('userEmail', 'userEmail must not be empty.').trim(),
    body('quarto', 'quarto must not be empty.').trim(),
    body('metodoDePagamento', 'metodoDePagamento must not be empty.').trim(),
    body('morada', 'morada must not be empty.').trim(),
    body('checkIn', 'checkIn must not be empty.').trim(),
    body('checkOut', 'checkOut must not be empty.').trim(),

    sanitizeBody('*').escape(),
    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.json({ 'message': 'Validation errors' });
        } else {
            QuartoInstance.find({'quarto': req.params.id})
                          .exec(function (err, results) {

                if (err) { return next(err)};

                var quartoinstance;

                for (let instance of results) {
                    Reserva.find({ 'quarto': instance })
                           .sort([['checkIn', 'ascending']])
                           .exec(function(err, listReservas) {
                                if (err) { return next(err); }
                                if(listReservas){
                                    for(var i = 0;  i <listReservas.length; i++){
                                        if(i === 0){

                                        }else if(i === listReservas.length){

                                        }else{

                                        }
                                    }
                                }else{
                                    quartoinstance = instance;
                                    break;
                                }
                            });
                };

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
            });
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
    body('userEmail', 'userEmail must not be empty.').trim(),
    body('quarto', 'quarto must not be empty.').trim(),
    body('metodoDePagamento', 'metodoDePagamento must not be empty.').trim(),
    body('morada', 'morada must not be empty.').trim(),
    body('checkIn', 'checkIn must not be empty.').trim(),
    body('checkOut', 'checkOut must not be empty.').trim(),

    sanitizeBody('*').escape(),
    (req, res, next) => {

        const errors = validationResult(req);

        var reserva = new Reserva({
            _id: req.body._id,
            userEmail: req.body.userEmail,
            quarto: req.body.quarto,
            metodoDePagamento: req.body.metodoDePagamento,
            morada: req.body.morada,
            checkIn: req.body.checkIn,
            checkOut: req.body.checkOut
        });

        if (!errors.isEmpty()) {
            res.json({'message': 'Validation errors'});        }
        else {
            Reserva.replaceOne({_id: req.body._id}, reserva, function (err, thegenre) {
                if (err) { return next(err); }
                res.json({ 'message': 'Reserva atualizada' });
            });
        }
    }
];