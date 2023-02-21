import axios from "axios";

export const getMovieList = () => axios.get('http://localhost:4500/api/movies')
export const getMovieDetails = (movieId) => axios.get(`http://localhost:4500/api/about-movies/${movieId}`)