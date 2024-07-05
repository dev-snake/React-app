const express = require('express');
const router = express.Router();
const voucherController = require('../controllers/VoucherController');
router.put('/update/:id', voucherController.update);
router.post('/create', voucherController.create);
router.get('/', voucherController.index);
module.exports = router;
