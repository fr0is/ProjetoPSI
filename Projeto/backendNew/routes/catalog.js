var express = require('express');
var router = express.Router();

//Controllers
var quarto_controller = require('../controllers/quartoController');
var hotel_controller = require('../controllers/hotelController');

/// Quarto Routes ///

//Get lista quartos
router.get('/hoteis/:id/quartos', quarto_controller.room_list);
router.get('/quartos/:id', quarto_controller.quarto_detail);

router.get('/hoteis', hotel_controller.hotel_list);
router.get('/hoteis/:id', hotel_controller.hotel_detail);


module.exports = router;