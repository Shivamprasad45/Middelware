// routes/bookRoutes.js

const express = require('express');
const router = express.Router();

// GET /books
router.get('/books', (req, res) => {
  console.log('GET request to /books');
  res.send('Here is the list of books!');
});

// POST /books
router.post('/books', (req, res) => {
  console.log('Book data received:', req.body);
  res.send('Book has been added!');
});

module.exports = router;
