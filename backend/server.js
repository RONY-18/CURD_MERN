//backend/server.js
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const connectDB = require('./database/db');

// Express Route
const studentRoute =
	require('../backend/routes/student.route')

// Connect to Database  
connectDB();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());
app.use('/students', studentRoute)


// PORT
const port = process.env.PORT || 4000;
app.listen(port,
	() => {
		console.log('Connected to port ' + port)
	})

// 404 Error
app.use((req, res, next) => {
	res.status(404).send('Error 404!')
});

app.use(function (err, req, res, next) {
	console.error(err.message);
	if (!err.statusCode) err.statusCode = 500;
	res.status(err.statusCode)
		.send(err.message);
});
