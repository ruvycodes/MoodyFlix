import { API_GET } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../Utils/moviesSlice'
import { useEffect } from 'react'

const usePopularMovies = () => {

    const dispatch = useDispatch()

    async function movie() {
        let raw = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_GET)
        let data = await raw.json()
        console.log(data);
        dispatch(addPopularMovies(data.results))
    }

    useEffect(() => {
        movie()
    }, [])
}

export default usePopularMovies