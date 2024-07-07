const orderModel = require('../models/OrderModel');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');
const voucherModel = require('../models/voucherModel');
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
	async cancelOrder(req, res) {
		try {
			const user = req.user;
			const { orderId } = req.params;
			const order = await orderModel.findOne({ orderId: orderId });
			const findUser = await userModel.findById(user._id);
			const findOrderOfUser = findUser.orders.find((item) => item.orderId === orderId);
			if (!order) {
				return res.status(404).json({ message: 'Order not found' });
			}
			findOrderOfUser.status = 4;
			order.status = 4;
			await order.save();
			await userModel.findByIdAndUpdate(user._id, findUser, { new: true });
			if (order.userId.toString() !== user._id.toString()) {
				return res
					.status(403)
					.json({ message: 'You are not allowed to cancel this order' });
			}
			return res.status(200).json({ message: 'Order has been canceled' });
		} catch (error) {
			console.log(error);
			return res.status(500).json(error);
		}
	}
	async confirmOrder(req, res) {
		try {
			const { orderId } = req.params;
			const order = await orderModel.findOne({ orderId: orderId });
			const userId = order.userId;
			const voucherId = order.voucherId;
			const user = await userModel.findById(userId);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			if (!order) {
				return res.status(404).json({ message: 'Order not found' });
			}
			if (voucherId !== '') {
				const voucher = await voucherModel.findById(voucherId);
				if (!voucher) {
					return res.status(404).json({ message: 'Voucher not found' });
				}
				voucher.usage_count += 1;
				await voucher.save();
			}
			// await voucherModel.findOneAndUpdate({ voucherId }, voucher, { new: true });
			const findOrderOfUser = user.orders.find((item) => item.orderId === orderId);
			findOrderOfUser.status = 1;
			await userModel.findByIdAndUpdate(userId, user, { new: true });
			order.status = 1;
			await order.save();
			const updatePromises = order.products.map(async (item) => {
				const productId = item._id;
				const updateProductCodes = item.color.map(async (productCode) => {
					const code = productCode.code;
					const quantityBuyed = productCode.quantityBuyed;
					const productToUpdate = await productModel.findById(productId);
					productToUpdate.variant.forEach((productVariant) => {
						if (productVariant.code === code) {
							productVariant.quantity_sold += quantityBuyed;
						}
					});
					await productModel.findByIdAndUpdate(productId, productToUpdate, { new: true });
				});
				return Promise.all(updateProductCodes);
			});
			await Promise.all(updatePromises);
			return res.status(200).json({ message: 'Order has been confirmed' });
		} catch (error) {
			console.log(error);
			return res.status(500).json(error);
		}
	}
	update(req, res) {}
}
module.exports = new OrderController();
