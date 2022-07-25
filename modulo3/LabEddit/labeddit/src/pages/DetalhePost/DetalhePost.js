import React from "react";
import { useNavigate } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage"

function DetalhePost() {
    useProtectedPage()
    const navigate = useNavigate()
    const goToPosts = () => {
        navigate("/ListaPost")
    }
    const goToBack = () => {
        navigate(-1)
    }
    return (
        <div>
            POST DETALHADOS
            <button onClick={goToPosts}>IR PARA LISTA DE POSTS</button>
            <button onClick={goToBack}>Voltar</button>
        </div>
    )
}

export default DetalhePost;