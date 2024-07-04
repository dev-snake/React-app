const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const order = new Schema(
	{
		userId: { type: String },
		fullname: { type: String },
		sex: { type: String },
		products: { type: Array, default: [] },
		status: { type: Number, default: 0 },
		total: { type: Number },
		date: { type: String, default: new Date() },
		methodPayment: { type: String },
		address: { type: String },
		phone: { type: String },
		email: { type: String },
		voucher: { type: Number, default: 0 }
	},
	{
		timestamps: true
	}
);
module.exports = mongoose.model('order', order);
