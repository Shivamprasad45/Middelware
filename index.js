const express = require('express');
const app = express();

// ✅ Custom Middleware
const addUserMiddleware = (req, res, next) => {
  req.user = 'Shivam daddy';
  next(); // Pass control to next middleware or route
};

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger); // Apply to all routes

// ✅ Apply middleware to /welcome route
app.get('/welcome', addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// ✅ Start Server
const PORT = 3000;
app.listen(PORT, () => {

console.log(`Server running at http://localhost:${PORT}`);

});
