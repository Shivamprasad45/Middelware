const express = require('express');
const app = express();

// Import route files
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Middleware to parse JSON
app.use(express.json());

// Mount the routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API!');
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
