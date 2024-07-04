const orderModel = require('../models/OrderModel');
const userModel = require('../models/userModel');
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
			const newOrder = {
				...req.body,
				address: `${ward}, ${district}, ${province}`,
				userId: user._id,
				email: user.email,
				date: new Date(),
				status: 0,
				orderId: Math.random().toString(36).substring(2, 15)
			};
			const createOrder = await orderModel.create(newOrder);
			const findUser = await userModel.findById(user._id);
			findUser.orders = [...findUser.orders, newOrder];
			await userModel.findByIdAndUpdate(user._id, findUser, { new: true });
			return res.status(200).json(createOrder);
		} catch (error) {
			console.log(error);
			return res.status(500).json(error);
		}
	}
	update(req, res) {}
}
module.exports = new OrderController();
