const express = require('express');
const router = express.Router();
const marcaController = require('../controller/MarcaController');

router.get('/', marcaController.getAll);
router.get('/:id', marcaController.getMarca);
router.post('/', marcaController.addMarca);
router.put('/:id', marcaController.setMarca);
router.delete('/:id', marcaController.deleteMarca);

module.exports = router;
