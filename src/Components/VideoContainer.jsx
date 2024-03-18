import React from 'react'
import { useSelector } from 'react-redux'
import MovieTrailer from './MovieTrailer'

const VideoContainer = () => {

  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies)
  if (!moviesList) { return } //known as early return , means return if the movieslist is not present

  let randomMovie = moviesList[Math.floor(Math.random() * 20)] // get random movie

  return (
    <>
      <div className='flex flex-col absolute text-white pt-[25%] aspect-video w-full bg-gradient-to-r from-black '><span className='p-4 my-2 mx-5 font-bold text-4xl'>{randomMovie?.title}</span>
        <span className='p-4 my-2 mx-5 w-1/3'>{randomMovie?.overview}</span>
      </div>
      <MovieTrailer id={randomMovie.id} />
    </>
  )
}

export default VideoContainer