const express = require('express');
const app = express();
const port = 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

// Define a route for a sample API endpoint
app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is some sample data from the API.',
    timestamp: new Date()
  };
  res.end(JSON.stringify(data));
});

// Define a route for handling a 404 error (page not found)
app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
