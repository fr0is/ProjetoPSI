var Quarto = require('../models/quarto');
var async = require('async')

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all books.
exports.quarto_list = function(req, res, next) {

    Quarto.find({})
        .exec(function(err, list_quartos) {
            if (err) { return next(err) }
            res.json(list_quartos);
        });

};