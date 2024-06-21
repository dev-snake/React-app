const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserControllers');
router.post('/', userController.create);
router.get('/', userController.index);
module.exports = router;
