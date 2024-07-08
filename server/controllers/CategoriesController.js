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
		try {
			const categoryLength = await categoryModel.find({}).countDocuments();
			const category = await categoryModel.create({
				name: req.body.name,
				categoryId: categoryLength + 1
			});
			return res.status(201).json('Add category success!');
		} catch (error) {
			console.log(error);
		}
	}
	update(req, res) {}
	delete(req, res) {}
}
module.exports = new CategoriesController();
