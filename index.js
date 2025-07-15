// server.js

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Custom logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// Import product routes
const productRoutes = require('./routes/productRoutes');

// Use the router for all product/category-related endpoints
app.use('/', productRoutes);

// Fallback route
app.use( (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(4000, () => {
  console.log('🚀 Server running at http://localhost:4000');
});
