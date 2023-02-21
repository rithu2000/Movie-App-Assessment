import mongoose from "mongoose"
import Movies from "../models/Movies.js"

// movie list API
export const getMovieList = async (req, res) => {
    try {
        const movies = await Movies.find({}).select("Year Title Images _id")
        if (movies) {
            res.status(200).json(movies)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
// movie details API
export const getMovieDetails = async (req, res) => {
    try {
        const movieDetails = await Movies.findOne({ _id: mongoose.Types.ObjectId(req.params.movieId) })
        if (movieDetails) {
            res.status(200).json(movieDetails)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}