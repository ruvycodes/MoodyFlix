import { API_GET } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../Utils/moviesSlice'
import { useEffect } from 'react'

const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    async function movie() {
        let raw = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_GET)
        let data = await raw.json()
        console.log(data);
        dispatch(addUpcomingMovies(data.results))
    }

    useEffect(() => {
        movie()
    }, [])
}

export default useUpcomingMovies