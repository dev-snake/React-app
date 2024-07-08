const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoriesController');
router.put('/:categoryId', categoryController.update);
router.delete('/:categoryId', categoryController.delete);
router.post('/create', categoryController.create);
router.get('/', categoryController.index);
module.exports = router;
