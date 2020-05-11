var express = require('express');
var router = express.Router();
const {getProduct, getGender} = require('../controllers/game.controllers');

router.get('/products', getGender);
router.get('/product', getProduct);

module.exports = router;