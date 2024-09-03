const express = require('express');
const router = express.Router();
const AssetController = require('../controller/AssetController');

router.get('/', AssetController.getAll);
router.get('/:id', AssetController.getAsset);
router.post('/', AssetController.addAsset);
router.put('/:id', AssetController.updateAsset);
router.delete('/:id', AssetController.deleteAsset);

module.exports = router;
