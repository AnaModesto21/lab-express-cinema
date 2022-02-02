
const { Schema, model } = require('mongoose');
const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    showtimes: [String],
    description: String,
  },
  {
    timestamps: true
  }
);
module.exports = model('Movie', movieSchema);