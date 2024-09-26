const express = require('express');
const app = express();

// Route for GET /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// Route for GET /user with query parameters
app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'Pornpajee';
  const lastname = req.query.lastname || 'Sunkkadithee';
  res.json({ firstname, lastname });
});

// Route for POST /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
