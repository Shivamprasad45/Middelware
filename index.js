const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Middleware
app.use(express.json());

// Mount routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Home route
app.get('/', (req, res) => {
  res.send("Welcome to the E-Commerce API!");
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
