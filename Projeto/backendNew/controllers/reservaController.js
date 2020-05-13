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

// Handle Utilizador create.
exports.reserva_create = [

    // Validate fields.
    body('userEmail', 'userEmail must not be empty.').trim(),
    body('quarto', 'quarto must not be empty.').trim(),
    body('metodoDePagamento', 'metodoDePagamento must not be empty.').trim(),
    body('morada', 'morada must not be empty.').trim(),
    body('checkIn', 'checkIn must not be empty.').trim(),
    body('checkOut', 'checkOut must not be empty.').trim(),

    // Sanitize fields.
    sanitizeBody('*').escape(),
    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a Utilizador object with escaped and trimmed data.
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
            // Data from form is valid. Save Utilizador.
            utilizador.save(function(err) {
                if (err) { return next(err); }
                // Successful - redirect to new Utilizador record.
                res.json({ 'message': 'success' });
            });
        }
    }
];