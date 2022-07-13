import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const MainContainer = styled.div`
height:100vh;
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
color:#1e9bff;
`
const BotaoV = styled.button`
font-size:1.5em;
background:#322F38;
:hover{
  box-shadow:0 0 35px #6eff3e;
}
`
const BotaoA = styled.button`
font-size:1.5em;
background:#322F38;
:hover{
  box-shadow:0 0 35px #ff1867;
}
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
          <h1>LabeX</h1>
        </ContainerTexto>
        <ContainerButtonMain>
          <ContainerButton>
            <BotaoV onClick={() => goToTrips("Trips")}>Seção Viagens</BotaoV>
          </ContainerButton>
          <ContainerButton>
            <BotaoA onClick={() => goToAdmin("Admin")}>Área de Admin</BotaoA>
          </ContainerButton>
        </ContainerButtonMain>
      </ContainerFilho>
    </MainContainer>
  );
}

export default HomePage;