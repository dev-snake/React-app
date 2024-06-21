const usersRouter = require('./userRouter');
const route = (app) => {
	app.use('/users', usersRouter);
	app.use('/', (req, res) => {
		res.send('Hello World');
	});
};
module.exports = route;
