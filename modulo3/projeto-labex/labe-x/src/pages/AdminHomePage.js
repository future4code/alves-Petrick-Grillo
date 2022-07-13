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
const BotaoCriar = styled.button`
:hover{
  box-shadow:0 0 35px #01F548;
}
`
const BotaoLogout = styled.button`
:hover{
  box-shadow:0 0 35px #F51100;
}
`
const Titulo = styled.div`
color:white;
`
function AdminHomePage(props) {
  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }
  const createTrip = () => {
    navigate("/CreateTrip")
  }
  return (
    <div>
      <Titulo>
      <h1>Painel Administrativo</h1>
      </Titulo>
      <div>
        <BotaoV onClick={backPage}>Voltar</BotaoV>
        <BotaoCriar onClick={createTrip}>Criar Viagem</BotaoCriar>
        <BotaoLogout >Logout</BotaoLogout>
      </div>
    </div>
  );
}

export default AdminHomePage;