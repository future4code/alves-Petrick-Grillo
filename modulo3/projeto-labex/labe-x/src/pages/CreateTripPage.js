import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const MainContainer = styled.div`
height:100vh;
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
}
::type {
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
color:white;
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
const BotaoCriar = styled.button`
:hover{
  box-shadow:0 0 35px #68AFF5;
}
`

function CreateTripPage(props) {
  const [nome, setNome] = useState("")

  const navigate = useNavigate()

  const backPage = () => {
    navigate(-1)
  }
  return (
    <MainContainer>
      <ContainerPai>
        <Titulo>
          <h1>Criar Viagem</h1>
        </Titulo>
        <ContainerInteração>
          <ContainerPergunta>
            <EspaçoPergunta
              placeholder="Nome"
            />
            <Select>
              <option disabled selected>Escolha sua viagem</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <EspaçoPergunta
              id="date"
              type="date"
            />
            <EspaçoPergunta
              placeholder="Descrição da viagem"
            />
            <EspaçoPergunta
              placeholder="Duração em dias"
            />
          </ContainerPergunta>
        </ContainerInteração>
        <ContainerPaiBotao>
          <ContainerBotao>
            <BotaoV onClick={backPage}>Voltar</BotaoV>
          </ContainerBotao>
          <ContainerBotao>
            <BotaoCriar>Criar</BotaoCriar>
          </ContainerBotao>
        </ContainerPaiBotao>
      </ContainerPai>
    </MainContainer>
  );
}

export default CreateTripPage;