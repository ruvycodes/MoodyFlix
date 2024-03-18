import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-3 mx-2 pt-2'>
            <h1 className=' text-white text-lg py-2 mb-2 font-semibold'>{title}</h1>
            <div className='flex overflow-x-scroll list'>
                <div className='flex'>{movies?.map((movie) => <MovieCard key={movie.id} poster={movie.poster_path} />)}</div>
            </div>
        </div>
    )
}

export default MovieList