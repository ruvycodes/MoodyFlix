import { useDispatch } from 'react-redux'
import { API_GET } from './constants'
import { addMoviesTrailer } from './moviesSlice'
import { useEffect } from 'react'

const useMovieTrailer = (id) => {

    const dispatch = useDispatch()

    const fetchTrailers = async () => {
        let raw = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_GET)
        let data = await raw.json();
        let videos = data.results.filter((video) => video.type == "Trailer") // only get the videos which are of trailer type (we only need trailer no other video)
        dispatch(addMoviesTrailer(videos))
    }

    useEffect(() => {
        fetchTrailers()
    }, [id])  // we need to put id in the dependency array so the useEffect runs on change of id , as redux will change the state so id also needs to be updated to avoid unwanted behaviour


}

export default useMovieTrailer