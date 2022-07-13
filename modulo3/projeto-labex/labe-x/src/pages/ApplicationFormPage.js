import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const MainContainer = styled.div`
height:100%;
`
const ContainerInteração = styled.div`
`
const EspaçoPergunta = styled.input`
width:40%;
padding-top:0.7%;
margin-top:1%;
margin-bottom:1%;
padding:10px 0px 10px 0px;
border: none;
border-radius: 4px;
background-color: #f1f1f1;
::placeholder {
  padding-left:10px;
  color:#27282c;
}
`
const ContainerPergunta = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
align-items: center;
`
const Titulo = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
color:#fbe0c2;
`
const ContainerPai = styled.div`
display:flex;
flex-direction:column;
`
const ContainerBotao = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:1%;
`
const Select = styled.select`
width:40%;
margin-top:1%;
margin-bottom:1%;
padding: 6px 10px;
border: none;
border-radius: 4px;
background-color: #f1f1f1;
`
const ContainerPaiBotao = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const BotaoV = styled.button`
:hover{
  box-shadow:0 0 35px #EDE18C;
}
`
const BotaoEnviar = styled.button`
:hover{
  box-shadow:0 0 35px #68AFF5;
}
`
const ContainerMapViagem = styled.div `
`

function ApplicationFormPage(props) {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [texto, setTexto] = useState("")
  const [profissao, setProfrissao] = useState("")
  const [trips, setTrips] = useState([])
  const [quantidade, setQuantidade] = useState("")

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
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
    return <option>{viagem.name}</option>
  })



  return (
    <MainContainer>
      <ContainerPai>
        <Titulo>
          <h1>Inscreva-se para uma viagem!</h1>
        </Titulo>
        <ContainerInteração>
          <ContainerPergunta>
            <Select>
              <option disabled selected>Escolha sua viagem</option>
              {viagens}
            </Select>
            <EspaçoPergunta
              placeholder="Nome"
            />
            <EspaçoPergunta
              placeholder="Idade"
            />
            <EspaçoPergunta
              placeholder="Texto de Candidatura"
            />
            <EspaçoPergunta
              placeholder="Profissão"
            />
            <Select>
              <option disabled selected>Selecione seu país</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </ContainerPergunta>
        </ContainerInteração>
        <ContainerPaiBotao>
          <ContainerBotao>
            <BotaoV onClick={backPage}>Voltar</BotaoV>
          </ContainerBotao>
          <ContainerBotao>
            <BotaoEnviar >Enviar</BotaoEnviar>
          </ContainerBotao>
        </ContainerPaiBotao>
      </ContainerPai>
    </MainContainer>
  );
}

export default ApplicationFormPage;