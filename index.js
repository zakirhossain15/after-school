const express = require("express");
const morgan = require('morgan');
const path = require("path");
const cors = require('cors');
const mongoose = require("./src/db/db")

const app = express();
const port = process.env.PORT || 3000;


// Import Models
const lessonsRouter = require('./src/routes/lesson_routes');
const ordersRouter = require('./src/routes/order_routes');



// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan('dev'));

// Static files
app.use('/images', express.static(path.join(__dirname, 'images')));

// Middleware
app.use(lessonsRouter);
app.use(ordersRouter);

app.get("/", (req, res) => {
    res.json({ message: 'Backend is Working' });
});

app.listen(port, () => {
    console.log(`Backend is working on port ${port}`);
});
