const express = require('express');
const router = express.Router();
const colaboradorController = require('../controller/colaboradorController');

router.get('/', colaboradorController.getAll);
router.get('/:id', colaboradorController.getColaborador);
router.post('/', colaboradorController.addColaborador);
router.put('/:id', colaboradorController.setColaborador);
router.delete('/:id', colaboradorController.deleteColaborador);

module.exports = router;
