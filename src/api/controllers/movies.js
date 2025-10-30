const Movie = require("../models/movies")

const getMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
    } catch (error) {
        return res.status(400).json("error");
    }
}


const postMovies = async (req, res, next) => {
    try {
        const newMovie = new Movie(req.body);

        if (req.file){
            newMovie.img = req.file.path;
        }

        const movieSaved = await newMovie.save();
        return res.status(201).json(movieSaved);
    } catch (error) {
         return res.status(400).json("Hubo un error")
    }
    }


const updateMovies = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newMovie = new Movie(req.body);
        newMovie._id = id;
        const movieUpdated = await Movie.findByIdAndUpdate( id, newMovie, {new: true,});
        return res.status(200).json(movieUpdated);
    } catch (error) {
         return res.status(400).json(" error")
    }
    }



const deleteMovies = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movieDeleted = await Movie.findByIdAndDelete(id);

        deleteFile(movieDeleted.img);
        
        return res.status(200).json({
            message: "Elemento eliminado",
            elemento: movieDeleted

        })
    } catch (error) {
         return res.status(400).json("Hubo un error")
    }
    }

    module.exports = {
        getMovies,
        postMovies,
        updateMovies,
        deleteMovies
    }
