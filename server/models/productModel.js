const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = new Schema(
	{
		name: { type: String },
		price: { type: Number },
		orginal_price: { type: Number },
		image: { type: String },
		color: { type: Object, default: { white: '', black: '' } },
		category: { type: Number },
		description: { type: String, default: '' },
		sale: { type: Number, default: 0 },
		comments: { type: Array, default: [] },
		quantity_sold: { type: Number, default: 0 },
		quantityImported: { type: Number, default: 10 }
	},
	{
		timestamps: true
	}
);
module.exports = mongoose.model('product', product);
