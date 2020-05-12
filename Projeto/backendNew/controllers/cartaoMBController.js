var CartaoMB = require('../models/cartaoMB');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var async = require('async');

exports.cartaoMb_get_cartao_email = function(req, res, next) {
    CartaoMB.find({ 'userEmail': req.params.userEmail })
        .exec(function(err, listCartao) {
            if (err) { return next(err); } // Error in API usage.
            res.json(listCartao);
        });
};

exports.cartaoMb_get = function(req, res, next) {
    CartaoMB.findById(req.params.id)
        .exec(function(err, cartao) {
            if (err) { return next(err); } // Error in API usage.
            if (cartao == null) { // No results.
                var err = new Error('Cartao not found');
                err.status = 404;
                return next(err);
            }
            // Successful, so render.
            res.json(cartao);
        });
};

// Handle CartaoMB create.
exports.cartaoMb_create = [

    // Validate fields.
    body('numero', 'Numero must not be empty.').isLength({ min: 1 }).trim(),
    body('prazoAno', 'Ano must not be empty.').isLength({ min: 1 }).trim(),
    body('prazoMes', 'Mes must not be empty.').isLength({ min: 1 }).trim(),
    body('cvv', 'cvv must not be empty.').isLength({ min: 1 }).trim(),
    body('userEmail', 'user must not be empty.').isLength({ min: 1 }).trim(),

    // Sanitize fields.
    sanitizeBody('*').escape(),
    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a CartaoMB object with escaped and trimmed data.
        var cartao = new CartaoMB({
            numero: req.body.numero,
            prazoAno: req.body.prazoAno,
            prazoMes: req.body.prazoMes,
            cvv: req.body.cvv,
            userEmail: req.body.userEmail,
        });
        if (!errors.isEmpty()) {
            res.json({ 'message': 'Validation errors' });
        } else {
            // Data from form is valid. Save CartaoMB.
            cartao.save(function(err) {
                if (err) { return next(err); }
                // Successful - redirect to new CartaoMB record.
                res.json({ 'message': 'success' });
            });
        }
    }
];