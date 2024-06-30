const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserControllers');
const auththenticateToken = require('../middlewares/authenticateToken');
router.post('/profile', auththenticateToken, userController.profile);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/', userController.index);
module.exports = router;
