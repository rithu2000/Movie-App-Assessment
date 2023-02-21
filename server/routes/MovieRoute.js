import express from 'express'
import { getMovieList, getMovieDetails } from '../controllers/MovieControllers.js'
const router = express.Router()

router.get('/movies', getMovieList)
router.get('/about-movies/:movieId', getMovieDetails)

export default router;