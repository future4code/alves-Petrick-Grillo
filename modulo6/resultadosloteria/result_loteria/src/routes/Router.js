import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MegaSena } from "../pages/Mega-sena/MegaSena"
import Quina from "../pages/quina/Quina"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MegaSena />} />
                <Route path="quina" element={<Quina />} />
            </Routes>
        </BrowserRouter>
    )
}