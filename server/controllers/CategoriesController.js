class CategoriesController {
	index(req, res) {
		return res.send('oke');
	}
	create(req, res) {}
	update(req, res) {}
	delete(req, res) {}
}
module.exports = new CategoriesController();
