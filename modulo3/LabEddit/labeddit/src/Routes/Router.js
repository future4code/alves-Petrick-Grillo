import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/header";
import DetalhePost from "../pages/DetalhePost/DetalhePost";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ListaPost from "../pages/ListaPost/ListaPost";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Login />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="ListaPost" element={<ListaPost />} />
                <Route path="DetalhePost/:id" element={<DetalhePost />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}