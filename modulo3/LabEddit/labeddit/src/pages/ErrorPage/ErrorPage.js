import React from "react";
import { useNavigate } from "react-router-dom"

function ErrorPage() {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/")
    }

    return (
        <div>
            ERRO
            <button onClick={goToHome}> VOLTAR PARA O INICIO</button>
        </div>
    )
}

export default ErrorPage;