const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = new Schema(
	{
		name: { type: String },
		price: { type: Number },
		image: { type: String },
		color: { type: Object, default: { white: '', black: '' } },
		categoryId: { type: Number },
		description: { type: String, default: '' },
		discount: { type: Number, default: 0 },
		comments: { type: Array, default: [] },
		quantity_sold: { type: Number, default: 0 },
		quantityImported: { type: Number, default: 10 }
	},
	{
		timestamps: true
	}
);
module.exports = mongoose.model('product', product);
