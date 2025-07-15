const express = require('express');
const app = express();

// Routers
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

// Middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Student & Course Portal API!');
});

// Student Routes
app.use('/students', studentRoutes);

// Course Routes
app.use('/courses', courseRoutes);

// 404 Handler (Wildcard)
app.use( (req, res) => {
  res.status(404).send('Page not found');
});

// Start Server
app.listen(4000, () => {
  console.log('🚀 Server running on http://localhost:4000');
});
