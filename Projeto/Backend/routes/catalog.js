var express = require('express');
var router = express.Router();


// Require our controllers.
var quarto_controller = require('../controllers/quartoController');

// GET request for list of all Book.
router.get('/quartos', quarto_controller.quarto_list);