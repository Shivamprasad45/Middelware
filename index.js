const express = require('express');
const app = express();

// ✅ Middleware to parse JSON request bodies
app.use(express.json());

// ✅ Custom Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Move on to the actual route
});

// ✅ GET /products
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

// ✅ POST /products
app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

// ✅ GET /categories
app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

// ✅ POST /categories
app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// ✅ Fallback Route (404)
app.use( (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// ✅ Start Server
app.listen(4000, () => {
  console.log('🚀 Server is running on http://localhost:4000');
});
