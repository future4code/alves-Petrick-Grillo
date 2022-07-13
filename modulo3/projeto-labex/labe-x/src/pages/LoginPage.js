import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const MainContainer = styled.div`
height:100vh;
`
const BotaoV = styled.button`
:hover{
  box-shadow:0 0 35px #EDE18C;
}
`
const BotaoEntrar = styled.button`
:hover{
  box-shadow:0 0 35px #9FF5B5;
}
`
const Titulo = styled.div`
color:white;
`
function LoginPage() {
  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }
  const goToAdminHome = () => {
    navigate("/AdminHome")
  }
  return (
    <div>
      <Titulo>
        <h1>Login</h1>
      </Titulo>
      <BotaoV onClick={backPage}>Voltar</BotaoV>
      <BotaoEntrar onClick={goToAdminHome}>Entrar</BotaoEntrar>
    </div>
  );
}

export default LoginPage;