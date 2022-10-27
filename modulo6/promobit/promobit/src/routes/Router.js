import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { PageDetail } from "../pages/PageDetail/PageDetail"
import { PopularPage } from "../pages/PopularPage/PopularPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<PopularPage />} />
                <Route path="details/:id" element={<PageDetail />} />
            </Routes>
        </BrowserRouter>
    )
}