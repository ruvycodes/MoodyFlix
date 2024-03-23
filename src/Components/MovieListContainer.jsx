import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieListContainer = () => {

  const moviesStore = useSelector((store) => store.movies)  // we are accessing our whole movies slice 

  return (
    <>{moviesStore && <div>
      <div className='-mt-52 bg-transparent'>
        <MovieList title={"Top Rated Movies"} movies={moviesStore.topRatedMovies} />
      </div>
      <div className='bg-black'>
        <MovieList title={"Now Playing"} movies={moviesStore.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={moviesStore.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={moviesStore.upcomingMovies} />

      </div>
    </div>
    }</>
  )
}

export default MovieListContainer