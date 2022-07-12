import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup, Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const MainContainer = styled.div`
`
const ContainerFilho = styled.div`
height:100vh;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const ContainerButton = styled.div`
display:flex;
`

function HomePage(props) {
  const navigate = useNavigate()

  const goToTrips = () => {
    navigate("/Trips")
  }
  const goToAdmin = () => {
    navigate("/Login")
  }
  return (
    <MainContainer>
      <ContainerFilho>
      <Text fontSize={32}>LabeX</Text>
      <ContainerButton>
        <Button colorScheme='purple' onClick={() => goToTrips("Trips")}>Ver Viagens</Button>
        <Button colorScheme='blue' onClick={() => goToAdmin("Admin")}>Área de Admin</Button>
      </ContainerButton>
      </ContainerFilho>
    </MainContainer>
  );
}

export default HomePage;