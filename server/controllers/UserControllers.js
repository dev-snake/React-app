const userModel = require('../models/userModel');
class UserController {
	async index(req, res) {
		try {
			const users = await userModel.find({});
			return res.status(200).json(users);
		} catch (error) {
			return res.status(404).json('Not found !');
		}
	}
	async create(req, res) {
		try {
			// const newUser = {
			// 	username: 'dev_snake',
			// 	password: 'Haudang2004@'
			// };
			// await userModel.create({});
			return res.status(200).json({ message: 'Created User Successful !' });
		} catch (error) {
			return res.status(500).json('ERROR SERVER !!');
		}
	}
}
module.exports = new UserController();
