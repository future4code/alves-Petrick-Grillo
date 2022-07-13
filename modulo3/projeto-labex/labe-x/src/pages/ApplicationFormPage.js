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
const ContainerMapViagem = styled.div`
`

function ApplicationFormPage(props) {
  const [trips, setTrips] = useState([])
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [texto, setTexto] = useState("")
  const [profissao, setProfissao] = useState("")
  const [pais, setPais] = useState("")
  const [id, setId] = useState("")

  const navigate = useNavigate()
  
  const backPage = () => {
    navigate(-1)
  }
  useEffect(() => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trips")
      .then((res) => {
        setTrips(res.data.trips)
        // console.log(res.data.trips)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  const viagens = trips && trips.map((viagem, index) => {
    return <option key={index}>{viagem.name}</option>
  })
  const token = localStorage.getItem("token")
  const applyTrip = () => {
    const bodyUser = {
      name: nome,
      age: idade,
      applicationText: texto,
      profession: profissao,
      country: pais
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trips/${viagens.id}/apply`, bodyUser, {
      headers: {
        auth: token
      }
    }
    ).then((resposta) => {
      console.log("Aplicação feita com sucesso!", resposta.data.success)
      alert("Aplicação feita com sucesso!")
    }).catch((erro) => {
      console.log(erro.data)
    })
  }
  const onChangeNome = (event) => {
    setNome(event.target.value)
  }
  const onChangeIdade = (event) => {
    setIdade(event.target.value)
  }
  const onChangeTexto = (event) => {
    setTexto(event.target.value)
  }
  const onChangeProfissao = (event) => {
    setProfissao(event.target.value)
  }
  const onChangePais = (event) => {
    setPais(event.target.value)
  }
  console.log(pais)
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
              value={nome}
              onChange={onChangeNome}
            />
            <EspaçoPergunta
              placeholder="Idade"
              value={idade}
              onChange={onChangeIdade}
            />
            <EspaçoPergunta
              placeholder="Texto de Candidatura"
              value={texto}
              onChange={onChangeTexto}
            />
            <EspaçoPergunta
              placeholder="Profissão"
              value={profissao}
              onChange={onChangeProfissao}
            />
            <Select value={pais} onChange={onChangePais}>
              <option value="" disabled selected>Selecione seu país</option>
              <option value='Argentina'>Argentina</option>
              <option value='Bolívia'>Bolívia</option>
              <option value='Brasil'>Brasil</option>
              <option value='Chile'>Chile</option>
              <option value='Colômbia'>Colômbia</option>
              <option value='Equador'>Equador</option>
              <option value='Guiana'>Guiana</option>
              <option value='Paraguai'>Paraguai</option>
              <option value='Peru'>Peru</option>
              <option value='Suriname'>Suriname</option>
              <option value='Uruguai'>Uruguai</option>
              <option value='Venezuela'>Venezuela</option>
            </Select>
          </ContainerPergunta>
        </ContainerInteração>
        <ContainerPaiBotao>
          <ContainerBotao>
            <BotaoV onClick={backPage}>Voltar</BotaoV>
          </ContainerBotao>
          <ContainerBotao>
            <BotaoEnviar onClick={applyTrip}>Enviar</BotaoEnviar>
          </ContainerBotao>
        </ContainerPaiBotao>
      </ContainerPai>
    </MainContainer>
  );
}

export default ApplicationFormPage;