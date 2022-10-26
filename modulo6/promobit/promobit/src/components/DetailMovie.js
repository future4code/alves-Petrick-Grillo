import { useContext } from "react"
import GlobalContext from "../Global/GlobalContext"

export function DetailMovie() {
    const { movieDetail } = useContext(GlobalContext)
    console.log(movieDetail)
    return (
        <div>
            {movieDetail.title}
        </div>
    )
}