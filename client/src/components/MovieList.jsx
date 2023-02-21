import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMovieList } from '../api/MovieApi'
import Card from './Cards'

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovieData = async () => {
      const { data } = await getMovieList()
      setMovies(data)
    }
    fetchMovieData()
  }, [])

  return (
    <div>
      <div className='px-10 mt-5 grid grid-cols-4 gap-2'>
        {movies.length !== 0 && movies?.map((movie) => (
          <Link to={`/about-movie`} state={{ id: movie?._id }}>
            <div key={movie?._id}>
              <Card movie={movie} />
            </div>
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default MovieList;