const voucherModel = require('../models/voucherModel');
class VoucherController {
	async index(req, res) {
		try {
			const vouchers = await voucherModel.find({});
			return res.status(200).json(vouchers);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	async create(req, res) {
		try {
			const voucher = await voucherModel.create(req.body);
			return res.status(201).json(voucher);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	async update(req, res) {
		try {
			const { id } = req.params;
			const voucher = await voucherModel.findByIdAndUpdate(
				id,
				{ applicable_amount: 2500000 },
				{ new: true }
			);
			return res.status(200).json(voucher);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}
module.exports = new VoucherController();
