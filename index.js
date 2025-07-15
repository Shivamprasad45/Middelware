// server.js

const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const bookRoutes = require('./routes/bookRoutes');

// Use book router
app.use('/', bookRoutes);

// Start the server
app.listen(4000, () => {
  console.log('📚 Library server running at http://localhost:4000');
});
