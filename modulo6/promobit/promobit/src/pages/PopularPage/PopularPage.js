import { useContext } from "react"
import GlobalContext from "../../Global/GlobalContext"

export function PopularPage() {
    const { filme } = useContext(GlobalContext)
    console.log(filme)
    return (
        <div>
            <h1>PopularPage</h1>
        </div>
    )
}