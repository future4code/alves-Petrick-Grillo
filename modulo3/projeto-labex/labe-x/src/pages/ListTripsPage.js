import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup, Text } from '@chakra-ui/react'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

const ContainerMapViagem = styled.div`
border:solid black 1px;
margin-top:1%;
width:50%;
display:flex;
flex-direction: column;
justify-content: space-evenly;
`
const ContainerViagem = styled.div`
padding-top:1%;
display:grid;
grid-template-columns:1fr 1fr;
justify-items: center;
`
const MainContainer = styled.div`
height:100vh;
width:100vw;
`
const ContainerBotao = styled.div`
display:flex;
justify-content: space-evenly;
padding-top:1%;
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
      <p>{viagem.name}</p>
      <p>{viagem.description}</p>
      <p>{viagem.planet}</p>
      <p>{viagem.durationInDays}</p>
      <p>{viagem.date}</p>
    </ContainerMapViagem>
  })
  return (
    <MainContainer>
      <Text fontSize={32}>Pagina</Text>
      <ContainerViagem>
      {viagens}
      </ContainerViagem>
      <ContainerBotao>
        <Button colorScheme='purple' onClick={backPage}>Voltar</Button>
        <Button colorScheme='purple' onClick={ApplyPage}>Inscrever-se</Button>
      </ContainerBotao>
    </MainContainer>
  );
}

export default ListTripsPage;