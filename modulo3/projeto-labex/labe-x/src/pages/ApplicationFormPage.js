import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

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
width:40.7%;
margin-top:1%;
margin-bottom:1%;
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

function ApplicationFormPage(props) {
  const [nome, setNome] = useState("")

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }

  return (
    <MainContainer>
      <ContainerPai>
        <Titulo>
          <h1>Inscreva-se para uma viagem</h1>
        </Titulo>
        <ContainerInteração>
          <ContainerPergunta>
            <Titulo>
              <h2>Escolha uma viagem</h2>
            </Titulo>
            <Select>
              <option disabled selected>Escolha sua viagem</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
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
{/* <div>
  <select>
    <input variant='filled' placeholder='Nome'>TESTE</input>
    <input variant='filled' placeholder='Idade'></input>
    <input variant='filled' placeholder='Texto de Candidatura' ></input>
    <input variant='filled' placeholder='Profissão' ></input>
    <select variant='filled' placeholder='Escolha seu País' />
  </select>
</div> */}