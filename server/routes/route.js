const usersRouter = require('./userRouter');
const productsRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
const orderRouter = require('./orderRouter');
const route = (app) => {
	app.use('/orders', orderRouter);
	app.use('/categories', categoryRouter);
	app.use('/products', productsRouter);
	app.use('/users', usersRouter);
	app.use('/', (req, res) => {
		res.send('Hello World');
	});
};
module.exports = route;
