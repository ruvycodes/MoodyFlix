import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Utils/useMovieTrailer'


const MovieTrailer = ({ id }) => {

    useMovieTrailer(id)

    const trailerList = useSelector((store) => store.movies.moviesTrailer);
    if (!trailerList) { return }  // early return
    let playingTrailer = trailerList[0]; // get the first element


    return (
        <div><iframe src={`https://www.youtube.com/embed/${playingTrailer?.key}`} title="YouTube video player"></iframe></div>
    )
}

export default MovieTrailer