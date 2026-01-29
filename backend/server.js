require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const songRoutes = require('./routes/songRoutes');
const albumRoutes = require('./routes/albumRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB: spotify_clone_db'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/api/songs', songRoutes);
app.use('/api/albums', albumRoutes);

app.get('/', (req, res) => {
    res.send('Spotify Clone Backend is Running');
});

// Start Server
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
