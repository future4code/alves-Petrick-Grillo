import { BASE_URL } from "../constants/urls"
import useRequestData from "../hooks/userRequestData"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const filme = useRequestData([], `${BASE_URL}`)
    const values = {
        filme
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState