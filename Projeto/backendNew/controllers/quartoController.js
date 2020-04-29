var async = require('async');
var Quarto = require('../models/quarto');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// List All Rooms
exports.room_list = function(req, res, next) {

    Quarto.find()
        .exec(function(err, list_quartos) {
            if (err) { return next(err); }
            res.json(list_quartos);
        })

};