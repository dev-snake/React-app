const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema(
	{
		fullname: { type: String },
		username: { type: String, unique: true },
		email: { type: String, unique: true },
		password: { type: String },
		role: { type: Number, default: 0 },
		address: { type: String, default: '' },
		orders: { type: Array, default: [] },
		active: { type: Number, default: 0 },
		dateOfBirth: { type: String, default: '' },
		sex: { type: String, default: '' },
		phonenumber: { type: String, default: '' },
		point: { type: Number, default: 0 },
		myVoucher: { type: Array, default: [] },
		voucherUsed: { type: Array, default: [] }
	},
	{
		timestamps: true
	}
);
module.exports = mongoose.model('user', user);
