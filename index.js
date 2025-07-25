const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers.");
  }

  const result = num1 + num2;
  res.send(`Result: ${result}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
