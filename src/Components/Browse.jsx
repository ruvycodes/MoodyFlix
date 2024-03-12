import React from 'react'
import usePopularMovies from '../Utils/usePopularMovies'


const Browse = () => {
  
  usePopularMovies()

  return (
    <div>Browse</div>
  )
}

export default Browse