import axios from "axios"
import { useState } from "react"
import { BASE_URL, GENRES_URL, GENRES_URL_MOVIES } from "../constants/urls"
import useRequestData from "../hooks/userRequestData"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const [page, setPage] = useState("1")
    const popularFilmes = useRequestData([], `${BASE_URL}&language=en-US&page=${page}`)
    const genresMovies = useRequestData([], `${GENRES_URL_MOVIES}`)
    const values = {
        popularFilmes,
        genresMovies,
        setPage,
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState