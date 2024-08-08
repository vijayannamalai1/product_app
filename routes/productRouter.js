const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/productsController');
const upload = require('../multerConfig'); // Import multer configuration

// Use multer middleware for file upload
router.route('/')
  .get(getAllProducts)
  .post(upload.single('thumbnail'), createProduct); // Handle file upload for creating a product

router.route('/:id')
  .get(getProduct)
  .patch(upload.single('thumbnail'), updateProduct) // Handle file upload for updating a product
  .delete(deleteProduct);

module.exports = router;