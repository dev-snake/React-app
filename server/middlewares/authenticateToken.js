const jwt = require('jsonwebtoken');
require('dotenv').config();
const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (!token) return res.status(404).json('Token không tìm thấy !');
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) {
			if (err.name === 'TokenExpiredError') {
				return res.status(403).json('Token hết hạn !');
			}
			return res.status(403).json('Token không hợp lệ !');
		}
		req.user = user;
		next();
	});
};
module.exports = authenticateToken;
