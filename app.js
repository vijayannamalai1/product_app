const express = require('express');
const cors = require('cors');
const path = require('path'); // Required for serving static files
const app = express();
const productRouter = require('./routes/productRouter');

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from the uploads directory

// Routes
app.use('/api/v1/products', productRouter);

// 404 Route
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

// Global error handler (optional but recommended for handling unexpected errors)
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
    res.status(500).send('Something went wrong!');
});

module.exports = app;