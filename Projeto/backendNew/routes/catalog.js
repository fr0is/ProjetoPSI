var express = require('express');
var router = express.Router();

//Controllers
var quarto_controller = require('../controllers/quartoController');
var hotel_controller = require('../controllers/hotelController');
var utilizador_controller = require('../controllers/utilizadorController');
var cartaoMB_controller = require('../controllers/cartaoMBController');



router.get('/hoteis', hotel_controller.hotel_list); // lista de hoteis
router.get('/hoteis/:hotelId', hotel_controller.hotel_detail); // hotel
router.get('/hoteis/:hotelId/quartos', quarto_controller.room_list); // lista de quartos de um hotel
router.get('/hoteis/:hotelId/quartos/:quartoId', quarto_controller.quarto_detail); // quarto
router.get('/users/:email', utilizador_controller.utilizador_get); // user get
router.post('/users/create', utilizador_controller.utilizador_create); //user create
router.post('/users/update', utilizador_controller.utilizador_update); //user update
router.get('/users/:userEmail/cartoes', cartaoMB_controller.cartaoMb_get_user); //user update

module.exports = router;