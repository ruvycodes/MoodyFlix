import React from 'react'
import usePopularMovies from '../Utils/usePopularMovies'
import VideoContainer from './VideoContainer'
import MovieListContainer from './MovieListContainer'
import useNowPlayingMovies from '../Utils/useNowPlayingMovies'
import useTopRatedMovies from '../Utils/useTopRatedMovies'
import useUpcomingMovies from '../Utils/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'


const Browse = () => {

  let temp = useSelector((store) => store.gpt.searchButtonToggle)

  usePopularMovies()
  useNowPlayingMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <>
      {temp ? <GptSearch /> : <div className='bg-black'>
        <VideoContainer />
        <MovieListContainer />
      </div>
      }
    </>
  )
}

export default Browse