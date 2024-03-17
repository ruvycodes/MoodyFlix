import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Utils/useMovieTrailer'


const MovieTrailer = ({ id }) => {

    useMovieTrailer(id)

    const trailerList = useSelector((store) => store.movies.moviesTrailer);
    if (!trailerList) { return }  // early return
    let playingTrailer = trailerList[0]; // get the first element

    //class aspect-video is used to give the video an aspect ratio of 16:9 so it is fully visible on screen , controls=0 in url to hide the seekbar and other options
    return (
        <div><iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${playingTrailer?.key}?autoplay=1&mute=1&controls=0&loop=1`} title="YouTube video player" allowFullScreen></iframe></div>
    )
}

export default MovieTrailer