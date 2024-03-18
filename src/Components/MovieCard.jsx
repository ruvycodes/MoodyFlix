import React from 'react'
import { POSTER_URL } from '../Utils/constants'

const MovieCard = ({ poster }) => {
    return (
        <div className='w-44 pr-2'><img src={POSTER_URL + poster} alt="Movie Poster" /></div>
    )
}

export default MovieCard