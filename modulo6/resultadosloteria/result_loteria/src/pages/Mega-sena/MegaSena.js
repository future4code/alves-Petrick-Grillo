import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import GlobalContext from "../../Global/GlobalContext"
import useRequestData from "../../hooks/useRequestData"

export function MegaSena() {
    const { nomesLoterias, idsConcursos, loteriaSelected, setLoteriaSelected } = useContext(GlobalContext)
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    const goToQuina = () => {
        navigate("/Quina")
    }
    const goToLotoFacil = () => {
        navigate("/LotoFacil")
    }
    const goToLotoMania = () => {
        navigate("/LotoMania")
    }
    const goToTimeMania = () => {
        navigate("/TimeMania")
    }
    const goToDiaSorte = () => {
        navigate("/DiaSorte")
    }

    const loteriasMap = nomesLoterias.map((loteria) => {
        return <option value={loteria.id}>{loteria.nome}</option>
    })
    const handleChangeLoteria = (event) => {
        const loteria = idsConcursos.find((concurso) => {
            return concurso.loteriaId === +(event.target.value)
        })
        setLoteriaSelected(loteria)
        switch (event.target.value) {
            case "0": goToHome()
            break;
            case "1": goToQuina()
            break;
            case "2": goToLotoFacil()
            break;
            case "3": goToLotoMania()
            break;
            case "4": goToTimeMania()
            break;
            case "5": goToDiaSorte()
            break;
            default:
                console.log("Não encontrado!")
        }
    }
    const [concurso, setConcurso] = useState({
        id: null,
        loteria: null,
        numeros: [],
        data: null
    })
    useEffect(() => {
        axios.get(`${BASE_URL}/concursos/${loteriaSelected.concursoId}`)
            .then((resposta) => {
                setConcurso(resposta.data)
            }).catch((erro) => {
                console.log(erro.response.data)
            })
    }, [loteriaSelected])
    console.log(concurso)
    return (
        <div>
            <select onChange={handleChangeLoteria}>
                {loteriasMap}
            </select>
            <h1>MEGA SENA</h1>
        </div>
    )
}