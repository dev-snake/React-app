const usersRouter = require('./userRouter');
const productsRouter = require('./productRouter');
const route = (app) => {
	app.use('/products', productsRouter);
	app.use('/users', usersRouter);
	app.use('/', (req, res) => {
		res.send('Hello World');
	});
};
module.exports = route;
