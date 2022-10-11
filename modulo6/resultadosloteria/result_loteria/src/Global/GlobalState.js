import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import GlobalContext from "./GlobalContext";
const GlobalState = (props) => {
    const nomesLoterias = useRequestData([], `${BASE_URL}/loterias`)
    const idsConcursos = useRequestData([], `${BASE_URL}/loterias-concursos`)
    const [loteriaSelected, setLoteriaSelected] = useState({ loteriaId: 0, concursoId: '2359' })

    const values = {
        nomesLoterias,
        idsConcursos,
        loteriaSelected,
        setLoteriaSelected
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState