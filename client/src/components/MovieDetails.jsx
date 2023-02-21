import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getMovieDetails } from '../api/MovieApi'
import { addMovieData } from '../redux/MovieData'

const MovieDetails = () => {
    const [movieData, setMovieData] = useState({})
    const { movie } = useSelector((state) => state.movies)
    const { state } = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMovieDetails = async () => {
            const storedMovie = movie.find((m) => m._id === state?.id);
            if (storedMovie === undefined) {
                const { data } = await getMovieDetails(state?.id)
                dispatch(addMovieData(data))
                setMovieData(data)
            } else {
                setMovieData(storedMovie)
            }
        }
        fetchMovieDetails()
    }, [state])

    return (

        <div>
            {Object.keys(movieData).length !== 0 ?
                <div className='px-20 py-10 flex gap-5'>
                    <div className='w-1/2 py-2'>
                        <div className='bg-white bg-opacity-5 hover:bg-opacity-20 transition shadow-sm shadow-gray-400 rounded-sm py-2 px-2'>
                            <img src={movieData?.Images[1]} alt="img" className='' />
                        </div>
                        <div>
                            <h1 className='text-center font-bold text-xl text-white'>{movieData?.Title}</h1>
                            <p className='text-center font-bold text-sm text-white'>{movieData?.Year}</p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='font-bold text-3xl text-center text-white'>Movie details</h1>
                        <div className='grid grid-cols-1 gap-2 text-white'>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Title:</span> {movieData?.Title}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Year:</span> {movieData?.Year}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Rated:</span> {movieData?.Rated}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Released:</span> {movieData?.Released}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Runtime:</span> {movieData?.Runtime}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Genre:</span> {movieData?.Genre}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Director:</span> {movieData?.Director}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Writer:</span> {movieData?.Writer}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Actors:</span> {movieData?.Actors}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Plot:</span> {movieData?.Plot}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Language:</span> {movieData?.Language}</p>
                            <p className='py-1 border-b'><span className='font-bold text-xl'>Country:</span> {movieData?.Country}</p>
                        </div>
                    </div>
                </div>
                : <div>
                    <p>loading....</p>
                </div>}
        </div>
    )
}

export default MovieDetails;