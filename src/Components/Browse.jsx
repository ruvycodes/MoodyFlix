import React from 'react'
import usePopularMovies from '../Utils/usePopularMovies'
import VideoContainer from './VideoContainer'
import MovieListContainer from './MovieListContainer'


const Browse = () => {

  usePopularMovies()

  return (
    <>
      <div>Browse</div>
      <VideoContainer />
      <MovieListContainer />
    </>
  )
}

export default Browse