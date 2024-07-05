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
			// const newVoucher = {
			// 	voucher_name: 'Giảm 100 nghìn đồng',
			// 	voucher_code: 'GIAM100K',
			// 	description: 'Giảm 100k cho đơn hàng trên 1 triệu đồng',
			// 	discount: 100000
			// };
			// const voucher = await voucherModel.create(newVoucher);
			return res.status(201).json(voucher || {});
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	async update(req, res) {
		try {
			const { id } = req.params;
			const voucher = await voucherModel.findByIdAndUpdate(
				id,
				{ usage_count: 0, max_uses: 0 },
				{ new: true }
			);
			return res.status(200).json(voucher);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}
module.exports = new VoucherController();
