let express = require("express");
let router = express.Router();
let bicicletaControllerAPI = require("../../controllers/api/bicicletasControllerAPI");

router.get("/", bicicletaControllerAPI.bicicleta_list);

router.post("/create", bicicletaControllerAPI.bicicleta_create);

router.post("/delete", bicicletaControllerAPI.bicicleta_delete);

module.exports = router;
// let express = require('express')
// let router = express.Router()
// let bicicletaController = require('../../controllers/api/bicicletaControllerAPI')

// router.get('/', bicicletaController.bicicleta_list)

// router.post('/create', bicicletaController.bicicleta_create)

// module.exports = router
