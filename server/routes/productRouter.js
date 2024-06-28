const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductsControllers');
router.delete('/:productId', productController.delete);
router.put('/:productId', productController.update);
router.post('/', productController.create);
router.get('/', productController.index);
module.exports = router;
