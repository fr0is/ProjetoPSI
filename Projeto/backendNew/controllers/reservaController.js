var Reserva = require('../models/reserva');

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

        var reserva = new Reserva({
            userEmail: req.body.userEmail,
            quarto: req.body.quarto,
            metodoDePagamento: req.body.metodoDePagamento,
            morada: req.body.morada,
            checkIn: req.body.checkIn,
            checkOut: req.body.checkOut
        });
        if (!errors.isEmpty()) {
            res.json({ 'message': 'Validation errors' });
        } else {
            reserva.save(function(err) {
                if (err) { return next(err); }
                res.json({ 'message': 'Quarto Reservado' });
            });
        }
    }
];

exports.reserva_delete = function(req, res, next) {
    async.parallel({
        reserva: function (callback) {
            Reserva.findById(req.body._id).exec(callback);
        },
    },function (err, results) {
        if (err) { return next(err); }

        Reserva.deleteOne({ _id: req.body._id }, function deleteReserva(err) {
            if (err) { return next(err); }
            res.json({ 'message': 'Reserva apagada' })
        });
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