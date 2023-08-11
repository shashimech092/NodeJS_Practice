
const express = require('express');
const cors = require('cors');

const PORT = 5000;

const app = express();

app.use(cors()); // Use the cors middleware


app.get('/api/data', (req, res) => {
   const hello = { message: 'Hello from Node.js backend!' };
  res.send(hello);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


