import React from 'react'
import { useSelector } from 'react-redux'
import MovieTrailer from './MovieTrailer'

const VideoContainer = () => {

  const moviesList = useSelector((store) => store.movies?.popularMovies)
  if (!moviesList) { return } //known as early return , means return if the movieslist is not present

  let randomMovie = moviesList[Math.floor(Math.random() * 20)] // get random movie

  return (
    <>
      <MovieTrailer id={randomMovie.id} />
      <div className='flex flex-col'><span className='p-4 m-4 font-bold'>{randomMovie?.title}</span>
        <span className='p-4 m-4 w-1/2'>{randomMovie?.overview}</span>
      </div>
    </>
  )
}

export default VideoContainer