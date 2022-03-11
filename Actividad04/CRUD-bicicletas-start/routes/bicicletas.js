let express = require('express')
let router = express.Router()
let bicicletaController = require('../controllers/bicicleta')

/* Listar las bicicletas */
router.get('/', bicicletaController.bicicleta_list);

module.exports = router;