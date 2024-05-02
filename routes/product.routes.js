const express = require("express");
const router = express.Router();

// const Product = require("../models/products.model");

const { getProducts, getProduct, postProduct, putProduct, delProduct } = require("../controller/product.controller.js");

router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/', postProduct);

router.put('/:id', putProduct);

router.delete('/:id', delProduct);

module.exports = router;