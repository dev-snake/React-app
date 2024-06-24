const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const route = require('./routes/route');
const path = require('path');
const db = require('./Config/db');
const port = 3000;
route(app);
db.ConnectDb();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
