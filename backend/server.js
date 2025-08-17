const express = require('express');
require('dotenv').config();

const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
