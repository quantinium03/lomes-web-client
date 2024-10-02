import React, { useEffect, useState } from 'react'
import Content from '../components/Content'

const MoviePage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movies')
        const result = await response.json();
        setMovies(result.data);
      } catch (err) {
        console.log('Error Fetching data', err.message);
      }
    }

    fetchMovies();
  }, [])
  return (
    <div className="flex-grow">
      <Content data={movies} />
    </div>
  )
}

export default MoviePage
