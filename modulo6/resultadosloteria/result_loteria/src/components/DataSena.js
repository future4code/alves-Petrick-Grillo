import moment from "moment/moment";
import { useContext } from "react";
import GlobalContext from "../Global/GlobalContext";

export function DataSena() {
    const { concurso } = useContext(GlobalContext)
    const DataGlobal = concurso.data
    const idConcurso = concurso.id
    const dataFormatada = moment(DataGlobal).format("DD-MM-YYYY")
    return (
        <div>
            <div>
                <h3>Concurso</h3>
            </div>
            <div>
                <h2>
                    {idConcurso}{" - "}{dataFormatada}
                </h2>
            </div>
        </div>
    )
}