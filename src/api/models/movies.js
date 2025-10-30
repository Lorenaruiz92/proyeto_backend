const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    duration: { type: Number, required: true },
    category: [{ type: String, enum:["terror", "comedy", "adventure"]}],
    img: { type: String, required: true},
}, {
timestamps: true,
})

const Movie = mongoose.model("movies", movieSchema, "movies");

module.exports = Movie;