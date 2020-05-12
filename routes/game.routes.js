var express = require('express');
var router = express.Router();
const {setBag, getProduct, getBag, addBag} = require('../controllers/game.controllers');


router.get('/product', getProduct);
router.post('/addBag', addBag);
router.get('/getBag', getBag);
router.post('/setBag', setBag);


module.exports = router;