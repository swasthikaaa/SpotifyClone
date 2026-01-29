const express = require('express');
const router = express.Router();
const Album = require('../models/Album');

// Get all albums
router.get('/', async (req, res) => {
    try {
        const albums = await Album.find().populate('songs');
        res.json(albums);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add an album
router.post('/', async (req, res) => {
    const album = new Album({
        title: req.body.title,
        artist: req.body.artist,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        songs: req.body.songs, // Array of Song IDs
        color: req.body.color
    });

    try {
        const newAlbum = await album.save();
        res.status(201).json(newAlbum);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
