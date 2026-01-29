const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String }, // Can be a string or Ref to Album model
  duration: { type: String, required: true }, // e.g., "3:45"
  audioUrl: { type: String, required: true },
  imageUrl: { type: String, required: true },
  plays: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);
