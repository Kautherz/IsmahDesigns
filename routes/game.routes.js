var express = require('express');
var router = express.Router();
const {getGame, getProduct} = require('../controllers/game.controllers');


router.get('/product', getProduct);
router.get('/:id', getGame);

module.exports = router;