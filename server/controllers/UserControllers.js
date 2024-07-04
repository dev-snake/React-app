const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
class UserController {
	async index(req, res) {
		try {
			const users = await userModel.find({});
			return res.status(200).json(users);
		} catch (error) {
			return res.status(404).json('Not found !');
		}
	}
	async login(req, res) {
		try {
			const { username, password } = req.body;
			const user = await userModel.findOne({ username });
			if (!user) return res.status(400).json('Username không tồn tại !');
			const comparePassword = await bcrypt.compare(password, user.password);
			if (!comparePassword) return res.status(400).json('Password không chính xác !');
			const payload = {
				_id: user._id,
				role: user.role,
				email: user.email,
				fullname: user.fullname,
				phonenumber: user.phonenumber,
				...req.body
			};
			const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' });
			const { password: pass, ...infoUser } = user;
			return res.status(200).json({ infoUser, token });
		} catch (error) {
			return res.status(500).json('ERROR SERVER !!');
		}
	}
	async register(req, res) {
		try {
			const { username, email, password } = req.body;
			const existingEmail = await userModel.findOne({ email });
			const existingUsername = await userModel.findOne({ username });
			if (existingEmail) return res.status(400).json('Email đã tồn tại !');
			if (existingUsername) return res.status(400).json('Username đã tồn tại !');
			const hashPassword = await bcrypt.hash(password, 10);
			await userModel.create({ ...req.body, password: hashPassword });
			return res.status(200).json(req.body);
		} catch (error) {
			return res.status(500).json('ERROR SERVER !!');
		}
	}
	async profile(req, res) {
		try {
			const user = req.user;
			const userInfor = await userModel.findById(user._id);
			const { password, ...infoUser } = userInfor._doc;
			if (!userInfor) return res.status(400).json('User không tồn tại !');
			return res.status(200).json(infoUser);
		} catch (error) {
			return res.status(500).json('ERROR SERVER !!');
		}
	}
}
module.exports = new UserController();
