const express = require('express');
const router = express.Router();
const { getProducts, getProductById, updateProductById, deleteProductById, createProduct} = require('../controllers/product.controller.js');

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

module.exports = router;