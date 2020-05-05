var express = require('express');
var router = express.Router();

//Controllers
var quarto_controller = require('../controllers/quartoController');
var hotel_controller = require('../controllers/hotelController');



router.get('/hoteis', hotel_controller.hotel_list); // lista de hoteis
router.get('/hoteis/:hotelId', hotel_controller.hotel_detail); // hotel
router.get('/hoteis/:hotelId/quartos', quarto_controller.room_list); // lista de quartos de um hotel
router.get('/hoteis/:hotelId/quartos/:quartoId', quarto_controller.quarto_detail); // quarto



module.exports = router;