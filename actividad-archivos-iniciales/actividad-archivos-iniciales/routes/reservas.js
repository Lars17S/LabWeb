var express = require("express");
var router = express.Router();
let reservaController = require("../controllers/reserva");

//Listar las bicicletas
router.get("/", reservaController.reserva_list);

module.exports = router;
