var CartaoMB = require('../models/cartaoMB');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var async = require('async');

exports.cartaoMb_get_user_email = function(req, res, next) {
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