const orderModel = require('../models/OrderModel');
class OrderController {
	async index(req, res) {
		try {
			const orders = await orderModel.find({});
			return res.status(200).json(orders);
		} catch (error) {
			console.log(error);
			return res.status(500).json(error);
		}
	}
	async create(req, res) {
		try {
			const user = req.user;
			const { district, province, ward } = req.body;
			const createOrder = await orderModel.create({
				...req.body,
				address: `${ward}, ${district}, ${province}`,
				userId: user._id,
				email: user.email
			});
			return res.status(200).json(createOrder);
		} catch (error) {
			console.log(error);
			return res.status(500).json(error);
		}
	}
	update(req, res) {}
}
module.exports = new OrderController();
