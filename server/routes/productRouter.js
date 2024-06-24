const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductsControllers');
router.post('/', productController.create);
router.get('/', productController.index);
module.exports = router;
