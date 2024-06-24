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
			const newProduct = {
				name: 'Chuột Logitech G102 LightSync Black',
				price: 410000,
				orginal_price: 440000,
				image: 'https://product.hstatic.net/200000722513/product/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_grande.jpg',
				category: 1,
				sale: 25
			};
			const product = await productModel.create(newProduct);
			return res.status(200).json(product);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}
module.exports = new ProductsControllers();
