const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const subjectRoutes = require('./routes/subject');
require('./config/db');

// Initialize Express apps
const app = express();

app.use(cors());

app.use(cookieParser());

// Middleware
app.use(express.json()); // Parse JSON bodies

app.use('/api/v1/subject', subjectRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

