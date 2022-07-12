import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup, Text,Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const MainContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
background-image: url ("(https://super.abril.com.br/wp-content/uploads/2018/07/istock-524554638.jpg)");
`
const ContainerFilho = styled.div`
display:flex;
flex-direction:column;
`
const ContainerButton = styled.div`
padding-top:5%;
display:flex;
justify-content: center;
padding-top:1%;
margin-left:1%;
`
const ContainerButtonMain = styled.div`
display:flex;
justify-content: center;
padding-top:1%;
margin-left:1%;
`
const ContainerTexto = styled.div`
display:flex;
justify-content:center;
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
        <ContainerTexto>
      <Text fontSize={32}>LabeX</Text>
        </ContainerTexto>
      <ContainerButtonMain>
      <ContainerButton>
        <Button colorScheme='purple' onClick={() => goToTrips("Trips")}>Ver Viagens</Button>
      </ContainerButton>
      <ContainerButton>
        <Button colorScheme='blue' onClick={() => goToAdmin("Admin")}>Área de Admin</Button>
      </ContainerButton>
      </ContainerButtonMain>
      </ContainerFilho>
    </MainContainer>
  );
}

export default HomePage;