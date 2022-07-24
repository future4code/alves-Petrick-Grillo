import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

const ContainerMapViagem = styled.div`
border:solid black 2px;
border-radius:5px;
margin-top:3%;
padding:1%;
width:80%;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: stretch;
background-color:#9F8DB5;
box-shadow: 0 0 1em white;
`
const ContainerViagem = styled.div`
padding-top:1%;
display:flex;
justify-content: center;
flex-direction:column;
align-items: center;
`
const MainContainer = styled.div`
height:100vh;
width:98vw;
`
const ContainerBotao = styled.div`
display:flex;
justify-content: center;
padding-top:1%;
margin-left:1%;
`
const ContainerBotaoF = styled.div`
padding-left:2%;
`
const Titutlo = styled.div`
display:flex;
justify-content: center;
color:white;
`
const BotaoV = styled.button`
:hover{
  box-shadow:0 0 35px #EDE18C;
}
`
const BotaoApply = styled.button`
:hover{
  box-shadow:0 0 35px #B164F5;
}
`
function ListTripsPage(props) {
  const [trips, setTrips] = useState("")
  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }
  const ApplyPage = () => {
    navigate("/ApplyTrip/:id")
  }
  useEffect(() => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trips")
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  const viagens = trips && trips.map((viagem, index) => {
    return <ContainerMapViagem key={index}>
      <p><b>Titulo:</b> {viagem.name}</p>
      <p><b>Descrição da viagem:</b>{viagem.description}</p>
      <p><b>Planeta:</b> {viagem.planet}</p>
      <p><b>Duração em dias:</b> {viagem.durationInDays}</p>
      <p><b>Data de saida:</b> {viagem.date}</p>
    </ContainerMapViagem>
  })
  return (
    <MainContainer>
      <Titutlo>
        <h1>Viagens Disponíveis!</h1>
      </Titutlo>
      <ContainerViagem>
          {viagens}
      </ContainerViagem>
      <ContainerBotao>
        <ContainerBotaoF>
          <BotaoV onClick={backPage}>Voltar</BotaoV>
        </ContainerBotaoF>
        <ContainerBotaoF>
          <BotaoApply onClick={ApplyPage}>Inscrever-se</BotaoApply>
        </ContainerBotaoF>
      </ContainerBotao>
    </MainContainer>
  );
}

export default ListTripsPage;