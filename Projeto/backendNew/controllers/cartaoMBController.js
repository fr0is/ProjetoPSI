var Utilizador = require('../models/utilizador');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var async = require('async');

exports.cartaoMb_get_user = function(req, res, next) {
    CartaoMB.find({ 'userId': req.params.id })
        .exec(function(err, listCartao) {
            if (err) { return next(err); } // Error in API usage.
            res.json(listCartao);
        });

};