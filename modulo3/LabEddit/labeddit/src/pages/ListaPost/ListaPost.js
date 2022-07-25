import React from "react";
import { useNavigate } from "react-router-dom"

import useProtectedPage from "../../hooks/useProtectedPage"

function ListaPost() {
    useProtectedPage()
    const navigate = useNavigate()

    const goToDetal = (id) => {
        navigate(`/DetalhePost/${id}`)
    }
    const goToPost = () => {
        navigate("/ListaPost")
    }
    return (
        <div>
            LISTA DE POSTSTSSTSTSTSTS
            <button onClick={() => goToDetal("teste")}>POST DETALHADO</button>
        </div>
    )
}

export default ListaPost;