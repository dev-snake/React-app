const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const voucher = new Schema(
	{
		voucher_name: { type: String, required: true },
		voucher_code: { type: String, required: true },
		description: { type: String, required: true },
		discount: { type: Number, required: true },
		expiry_date: { type: Date, default: Date.now },
		usage_count: { type: Number, default: 0 },
		max_uses: { type: Number, default: 0 }
	},
	{
		timestamps: true
	}
);
module.exports = mongoose.model('voucher', voucher);
