const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(express.json());

// Mount Product Routes
app.use('/products', productRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API!');
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
