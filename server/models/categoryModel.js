const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const category = new Schema(
	{
		categoryId: { type: Number, required: true, unique: true },
		name: { type: String, required: true, unique: true }
	},
	{
		timestamps: true
	}
);
module.exports = mongoose.model('category', category);
