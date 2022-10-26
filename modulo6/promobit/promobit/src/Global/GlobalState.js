import axios from "axios"
import { useState } from "react"
import { BASE_URL, BASE_URL_POPULAR, GENRES_URL, GENRES_URL_MOVIES, KEY_API } from "../constants/urls"
import useRequestData from "../hooks/userRequestData"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    // Maximo de paginas 500
    const [page, setPage] = useState("1")
    const popularFilmes = useRequestData([], `${BASE_URL_POPULAR}&language=en-US&page=${page}`)
    const genresMovies = useRequestData([], `${GENRES_URL_MOVIES}`)
    const [movieDetail, setMovieDetail] = useState([])
    const addMovie = (id) => {
        axios.get(`${BASE_URL}${id}${KEY_API}`)
            .then((resposta) => {
                setMovieDetail(resposta.data)
                localStorage.setItem("selectmovie", movieDetail)
            })
        // console.log(movieDetail)
    }
    const values = {
        popularFilmes,
        genresMovies,
        setPage,
        movieDetail,
        setMovieDetail,
        addMovie
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState