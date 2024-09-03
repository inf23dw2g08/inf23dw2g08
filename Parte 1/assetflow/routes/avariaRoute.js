const express = require('express');
const router = express.Router();
const avariaController = require('../controller/AvariaController');

router.get('/', avariaController.getAll);
router.get('/:id', avariaController.getAvaria);
router.post('/', avariaController.addAvaria);
router.put('/:id', avariaController.setAvaria);
router.delete('/:id', avariaController.deleteAvaria);

module.exports = router;
