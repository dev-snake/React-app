const categoryModel = require('../models/CategoryModel');
class CategoriesController {
	async index(req, res) {
		try {
			const categories = await categoryModel.find({});
			return res.status(200).json(categories);
		} catch (error) {
			return res.status(500).json('Internal server error');
		}
	}
	async create(req, res) {
		const newCategory = {
			name: 'Tai nghe',
			categoryId: 3
		};
		try {
			const category = await categoryModel.create(newCategory);
			return res.status(201).json('Add category success!');
		} catch (error) {
			console.log(error);
		}
	}
	update(req, res) {}
	delete(req, res) {}
}
module.exports = new CategoriesController();
