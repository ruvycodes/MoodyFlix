import { API_GET } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies} from '../Utils/moviesSlice'
import { useEffect } from 'react'

const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    async function movie() {
        let raw = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_GET)
        let data = await raw.json()
        console.log(data);
        dispatch(addTopRatedMovies(data.results))
    }

    useEffect(() => {
        movie()
    }, [])
}

export default useTopRatedMovies