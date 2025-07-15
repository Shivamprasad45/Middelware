const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
} = require('../controllers/productController');

// Route: GET /products
router.get('/', getAllProducts);

// Route: GET /products/:id
router.get('/:id', getProductById);

// Route: POST /products
router.post('/', addProduct);

module.exports = router;
