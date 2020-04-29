var express = require('express');
var router = express.Router();

//Controllers
var quarto_controller = require('../controllers/quartoController');

/// Quarto Routes ///

//Get lista quartos
router.get('/quartos', quarto_controller.room_list);


module.exports = router;