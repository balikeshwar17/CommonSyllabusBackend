const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('./config/db');

// Initialize Express apps
const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true, 
//   })
// );

app.use(cookieParser());

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

