const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());

// Connect to DB
connectDB();

// Routes
const sampleRoutes = require('./routes/sampleRoutes');
app.use('/', sampleRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
