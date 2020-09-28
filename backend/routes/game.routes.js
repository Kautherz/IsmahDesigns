var express = require("express");
var router = express.Router();
const { getGender, getProduct } = require("../controllers/game.controllers");

router.get("/products", getGender);
router.get("/product", getProduct);

module.exports = router;
