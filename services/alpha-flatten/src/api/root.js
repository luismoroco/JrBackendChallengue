const alphaController = require('../controller/alpha.js');
const express = require('express');

const router = express.Router();

router.put('/alpha', alphaController.addAlpha);
router.post('/flatten', alphaController.addFlatten);

module.exports = router;