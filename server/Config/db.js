const mongoose = require('mongoose');
const ConnectDb = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/react-app');
		console.log('Connected successful !');
		return;
	} catch (error) {
		console.error(error);
		return res.status(404);
	}
};
module.exports = { ConnectDb };
