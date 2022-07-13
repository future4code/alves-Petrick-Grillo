import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const MainContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
`
const ContainerPai = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
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
const ContainerMapViagem = styled.div`
border:solid black 1px;
border-radius:5px;
margin-top:1%;
padding:4.5%;
width:100%;
background-color:#fbe0c2;
display:flex;
justify-content:space-between;
align-items:center;
`
const ContainerTrips = styled.div`
width:100%;
`
const BotaoExcluir = styled.button`
:hover{
  box-shadow:0 0 35px #F51100;
  letter-spacing:0em;
}
`

function AdminHomePage(props) {
  const [trips, setTrips] = useState("")
  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }
  const createTrip = () => {
    navigate("/CreateTrip")
  }
  useEffect(() => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trips")
      .then((res) => {
        setTrips(res.data.trips)
        console.log(res.data.trips)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  const viagens = trips && trips.map((viagem, index) => {
    return <ContainerMapViagem key={index}>
      <p><b>{viagem.name}</b></p>
      <BotaoExcluir>X</BotaoExcluir>
    </ContainerMapViagem>
  })
  return (
    <MainContainer>
      <ContainerPai>
        <Titulo>
          <h1>Painel Administrativo</h1>
        </Titulo>
        <div>
          <BotaoV onClick={backPage}>Voltar</BotaoV>
          <BotaoCriar onClick={createTrip}>Criar Viagem</BotaoCriar>
          <BotaoLogout >Logout</BotaoLogout>
        </div>
        <ContainerTrips>
          {viagens}
        </ContainerTrips>
      </ContainerPai>
    </MainContainer>
  );
}

export default AdminHomePage;