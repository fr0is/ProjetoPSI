var Utilizador = require('../models/utilizador');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var async = require('async');

exports.utilizador_get = function(req, res, next) {
    Utilizador.find({ 'email': req.params.email })
        .exec(function(err, user) {
            if (err) { return next(err); }
            res.json(user);
        })
};

// Handle Utilizador create.
exports.utilizador_create = [

    // Validate fields.
    body('nome', 'Nome must not be empty.').isLength({ min: 1 }).trim(),
    body('email', 'Email must not be empty.').isLength({ min: 1 }).trim(),
    body('password', 'Password must not be empty.').isLength({ min: 1 }).trim(),

    // Sanitize fields.
    sanitizeBody('*').escape(),
    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a Utilizador object with escaped and trimmed data.
        var utilizador = new Utilizador({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
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

// Handle utilizador update on POST.
exports.utilizador_update_post = [

    // Validate fields.
    body('nome', 'Nome must not be empty.').isLength({ min: 1 }).trim(),
    body('email', 'Email must not be empty.').isLength({ min: 1 }).trim(),
    body('password', 'Password must not be empty.').isLength({ min: 1 }).trim(),

    // Sanitize fields.
    sanitizeBody('nome').escape(),
    sanitizeBody('email').escape(),
    sanitizeBody('password').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a utilizador object with escaped/trimmed data and old id.
        var utilizador = new Utilizador({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
            _id: req.body._id // This is required, or a new ID will be assigned!
        });

        if (!errors.isEmpty()) {
            res.json({ 'message': 'Validation errors' });
        } else {
            // Data from form is valid. Update the record.
            Utilizador.replaceOne({ _id: req.body._id }, utilizador, function(err, theutilizador) {
                if (err) { return next(err); }
                res.json({ 'message': 'success' });
            });
        }
    }
];