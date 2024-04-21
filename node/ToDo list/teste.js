const express = require('express');

const app = express();

// Your route handler code here
app.get('/api/app/getnote', (req, res) => {
  // Handle the GET request for '/api/app/getnote'
  res.send('Hello from the getnote route!');
});

// Start the server
app.listen(5038, () => {
  console.log('Server listening on port 5038');
});