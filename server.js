// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows Express to read JSON data from React requests

app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/enquiries', enquiryRoutes);

// Basic Health Check Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'ERP API is running' });
});

// We will mount our Auth, Enquiry, Quotation, and Order routes here soon

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});