import React from 'react'
import usePopularMovies from '../Utils/usePopularMovies'
import VideoContainer from './VideoContainer'
import MovieListContainer from './MovieListContainer'
import useNowPlayingMovies from '../Utils/useNowPlayingMovies'
import useTopRatedMovies from '../Utils/useTopRatedMovies'
import useUpcomingMovies from '../Utils/useUpcomingMovies'


const Browse = () => {

  usePopularMovies()
  useNowPlayingMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <>
      <div>Browse</div>
      <VideoContainer />
      <MovieListContainer />
    </>
  )
}

export default Browse