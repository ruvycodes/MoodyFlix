import { API_GET } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies} from '../Utils/moviesSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    async function movie() {
        let raw = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_GET)
        let data = await raw.json()
        console.log(data);
        dispatch(addNowPlayingMovies(data.results))
    }

    useEffect(() => {
        movie()
    }, [])
}

export default useNowPlayingMovies