import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup, Text, Box,} from '@chakra-ui/react'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

const ContainerMapViagem = styled.div`
border:solid black 1px;
border-radius:5px;
margin-top:1%;
padding:1%;
width:80%;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: stretch;
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
width:100vw;
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
`

function ListTripsPage(props) {
  const [trips, setTrips] = useState("")
  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }
  const ApplyPage = () => {
    navigate("/ApplyTrip")
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
  console.log(trips)
  const viagens = trips && trips.map((viagem, index) => {
    return <ContainerMapViagem key={index}>
      <p>Titulo: {viagem.name}</p>
      <p>Descrição da viagem: {viagem.description}</p>
      <p>Planeta: {viagem.planet}</p>
      <p>Duração em dias: {viagem.durationInDays}</p>
      <p>Data de saida: {viagem.date}</p>
    </ContainerMapViagem>
  })
  return (
    <MainContainer>
      <Titutlo>
        <Text fontSize={32}>Viagens Disponíveis!</Text>
      </Titutlo>
      <ContainerViagem>
          {viagens}
      </ContainerViagem>
      <ContainerBotao>
        <ContainerBotaoF>
          <Button colorScheme='purple' onClick={backPage}>Voltar</Button>
        </ContainerBotaoF>
        <ContainerBotaoF>
          <Button colorScheme='purple' onClick={ApplyPage}>Inscrever-se</Button>
        </ContainerBotaoF>
      </ContainerBotao>
    </MainContainer>
  );
}

export default ListTripsPage;