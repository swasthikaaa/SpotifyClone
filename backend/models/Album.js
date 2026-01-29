const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    color: { type: String, default: '#121212' }, // Dominant color for UI
}, { timestamps: true });

module.exports = mongoose.model('Album', albumSchema);
