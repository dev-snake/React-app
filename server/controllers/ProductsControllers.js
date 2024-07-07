const productModel = require('../models/productModel');
class ProductsControllers {
	async index(req, res) {
		try {
			const products = await productModel.find({});
			return res.status(200).json(products);
		} catch (err) {
			return res.status(404).json(err.message);
		}
	}
	async create(req, res) {
		try {
			const product = await productModel.create(req.body);
			return res.status(200).json(product);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	async update(req, res) {
		try {
			const { productId } = req.params;
			console.log(req.body);
			const product = await productModel.findByIdAndUpdate(productId, req.body, {
				new: true
			});
			return res.status(200).json(product);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	async delete(req, res) {
		try {
			const { productId } = req.params;
			await productModel.findByIdAndDelete(productId);
			return res.status(200).json('Deleted Successfully');
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	async sendComment(req, res) {
		try {
			const user = req.user;
			const { productId, comments } = req.body;
			const product = await productModel.findById(productId);
			product.comments = [...product.comments, { userId: user._id, comments }];
			await product.save();
			return res.status(200).json({ message: 'Comment sent successfully' });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}
module.exports = new ProductsControllers();
