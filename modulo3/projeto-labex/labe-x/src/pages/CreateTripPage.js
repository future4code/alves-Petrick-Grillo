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
width:41%;
margin-top:1%;
margin-bottom:1%;
`
const ContainerPaiBotao = styled.div`
display:flex;
justify-content:center;
align-items:center;
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
            <button onClick={backPage}>Voltar</button>
          </ContainerBotao>
          <ContainerBotao>
            <button>Criar</button>
          </ContainerBotao>
        </ContainerPaiBotao>
      </ContainerPai>
    </MainContainer>
  );
}

export default CreateTripPage;