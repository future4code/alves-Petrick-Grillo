import { BrowserRouter, Route, Routes } from "react-router-dom"
import DiaDeSorte from "../pages/dia_de_sorte/DiaDeSorte"
import LotoFacil from "../pages/lotofacil/LotoFacil"
import LotoMania from "../pages/lotomania/LotoMania"
import { MegaSena } from "../pages/Mega-sena/MegaSena"
import Quina from "../pages/quina/Quina"
import TimeMania from "../pages/timemania/TimeMania"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MegaSena />} />
                <Route path="Quina" element={<Quina />} />
                <Route path="DiaSorte" element={<DiaDeSorte />} />
                <Route path="LotoFacil" element={<LotoFacil />} />
                <Route path="LotoMania" element={<LotoMania />} />
                <Route path="TimeMania" element={<TimeMania />} />
            </Routes>
        </BrowserRouter>
    )
}