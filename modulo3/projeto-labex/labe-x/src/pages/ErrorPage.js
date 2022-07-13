import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const MainContainer = styled.div`
height:100vh;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const ErroTexto = styled.h1`
color:white;
padding:20px;
`
const Botao = styled.button`
:hover{
  box-shadow:0 0 35px #1e9bff;
}
`
function ErrorPage() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    return (
        <MainContainer>
            <div>
                <ErroTexto>ERRO! Pagina nao encontrada ;(</ErroTexto>
            </div>
            <Botao textStyle="h1" onClick={goToHome}>Pagina Inicial</Botao>
        </MainContainer>

    )
}
export default ErrorPage;