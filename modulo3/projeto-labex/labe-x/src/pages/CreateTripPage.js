import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from "./TripDetailsPage";
import axios from "axios";

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
  useProtectedPage()
  const [nome, setNome] = useState("")
  const [planeta, setPlaneta] = useState("")
  const [date, setDate] = useState("")
  const [descricao, setDescricao] = useState("")
  const [duracao, setDuracao] = useState("")

  const navigate = useNavigate()
  const backPage = () => {
    navigate(-1)
  }
  // const dataTeste = ((date.getDate()))
  const token = localStorage.getItem("token")

  const addTrip = () => {
    const bodyUser = {
      name: nome,
      planet: planeta,
      date: date,
      description: descricao,
      durationInDays: duracao
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trips", bodyUser, {
      headers: {
        auth: token
      }
    }
    ).then((resposta) => {
      alert("Viagem Criada!")
    }).catch((erro) => {
      console.log(erro)
    })
  }
  const onChangeNome = (event) => {
    setNome(event.target.value)
  }
  const onChangePlaneta = (event) => {
    setPlaneta(event.target.value)
  }
  const onChangeDate = (event) => {
    setDate(event.target.value)
  }
  const onChangeDescricao = (event) => {
    setDescricao(event.target.value)
  }
  const onChangeDuracao = (event) => {
    setDuracao(event.target.value)
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
              value={nome}
              onChange={onChangeNome}
            />
            <Select value={planeta} onChange={onChangePlaneta}>
              <option value="" disabled selected>Escolha sua viagem</option>
              <option value='Mercurio'>Mercúrio</option>
              <option value='Venus'>Vênus</option>
              <option value='Terra'>Terra</option>
              <option value='Marte'>Marte</option>
              <option value='Saturno'>Saturno</option>
              <option value='Urano'>Urano</option>
            </Select>
            <EspaçoPergunta
              id="date"
              type="date"
              value={date}
              onChange={onChangeDate}
            />
            <EspaçoPergunta
              placeholder="Descrição da viagem"
              value={descricao}
              onChange={onChangeDescricao}
            />
            <EspaçoPergunta
              placeholder="Duração em dias"
              value={duracao}
              onChange={onChangeDuracao}
            />
          </ContainerPergunta>
        </ContainerInteração>
        <ContainerPaiBotao>
          <ContainerBotao>
            <BotaoV onClick={backPage}>Voltar</BotaoV>
          </ContainerBotao>
          <ContainerBotao>
            <BotaoCriar onClick={addTrip}>Criar</BotaoCriar>
          </ContainerBotao>
        </ContainerPaiBotao>
      </ContainerPai>
    </MainContainer>
  );
}

export default CreateTripPage;