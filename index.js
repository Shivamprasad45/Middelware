const express = require('express');
const app = express();

app.use(express.json());

// ✅ Dynamic route with route and query parameters
// Example URL: /welcome/Julian?role=Admin
app.get('/welcome/:username', (req, res) => {
  const { username } = req.params;     // route param
  const { role } = req.query;          // query param

  // Handle missing role
  if (!role) {
    return res.status(400).send(`Hi ${username}, please provide your role as a query parameter like ?role=Admin`);
  }

  // Send dynamic response
  res.send(`Welcome ${username}, your role is ${role}`);
});

// ✅ Fallback 404 route
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// ✅ Start server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
