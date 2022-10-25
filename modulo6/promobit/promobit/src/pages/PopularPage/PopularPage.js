import { useContext } from "react"
import { PopularMovies } from "../../components/PopularMovies"
import GlobalContext from "../../Global/GlobalContext"

export function PopularPage() {
    return (
        <div>
            <PopularMovies />
        </div>
    )
}