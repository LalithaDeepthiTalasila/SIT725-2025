const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { clear } = require('console');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/submit', (req, res) => {
  const { name, description } = req.body;
  console.log('Received report:', { name, description });
  res.send(`<h4>Thank you. Your report has been submitted anonymously.</h4><a href="/">Back</a>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
