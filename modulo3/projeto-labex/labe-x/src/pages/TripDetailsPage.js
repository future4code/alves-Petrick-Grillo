import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useProtectedPage from "../Hooks/useProtectedPage";

const MainContainer = styled.div`
height:100%;
`
const Titulo = styled.div`
color:white;
display:flex;
align-items:center;
justify-content:center;
`
const ContainerPai = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const ContainerInfo = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background-color:#fbe0c2;
height:40%;
width:60%;
`
const ContainerAprovados = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background-color:#fbe0c2;
height:40%;
width:30%;
border: 2px solid black;
margin-top:2%;
`
const ContainerParaAprovar = styled.div`
display:flex;
/* justify-content:center; */
flex-direction:column;
align-items:center;
background-color:#fbe0c2;
height:40%;
width:30%;
border: 2px solid black;
margin-top:2%;
`
const ContainerPaiCandidatos = styled.div`
display:flex;
height:40%;
width:100%;
justify-content:space-evenly;
`
const Container7 = styled.div`
flex-direction:column;
height:40%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:stretch;
width:80%;
`
const Container8 = styled.div`
padding-left:2%;
border: 5px solid black;
box-shadow:0 0 10px black;
width:80%;
margin:2%;
display:flex;
flex-wrap:wrap;
`
const BotaoAprovar = styled.button`
:hover{
  box-shadow:0 0 35px green;
}
`
const BotaoNegar = styled.button`
:hover{
  box-shadow:0 0 35px red;
}
`
const BotaoVoltar = styled.button`
:hover{
  box-shadow:0 0 35px #fbe0c2;
}
`

function TripDetailsPage() {
  const navigate = useNavigate()

  const [id, setId] = useState("")
  const [aprovados, setAprovados] = useState("")
  const [candidatos, setCandidatos] = useState("")
  const [idCandidatos, setIdCandidatos] = useState("")
  const [permissao, setPermissao] = useState("inicial")

  useProtectedPage()
  const params = useParams()

  const aprovar = (id, permissao) => {
    console.log(permissao)
    const body = {
      approve: permissao
    }
    const token = localStorage.getItem("token")

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trips/${params.id}/candidates/${id}/decide`, body, {
      headers: {
        auth: token
      }
    }).then((resposta) => {
      console.log(resposta.data)
      console.log(id)
    }).catch((erro) => {
      console.log(erro.response.data)
    })
  }
  useEffect(() => {
  }, [permissao])

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trip/${params.id}`, {
      headers: {
        auth: token
      }
    }).then((resposta) => {
      setId(resposta.data.trip)
      setAprovados(resposta.data.trip.approved)
      setCandidatos(resposta.data.trip.candidates)
      setIdCandidatos(resposta.data.trip.candidates)
    }).catch((erro) => {
      console.log(erro.response.data)
    })
  }, [])
  console.log(idCandidatos)
  const confirmados = aprovados && aprovados.map((candidatos) => {
    return <div>
      <p>{candidatos.name}</p>
    </div>
  })

  const backPage = () => {
    navigate("/AdminHome")
  }
  console.log(idCandidatos)
  const idCan = idCandidatos && idCandidatos.map((candidatos) => {
    return <Container8>
      <Container7>
        <p>Nome: {candidatos.name}</p>
        <p>Texto de Candidatura: {candidatos.applicationText}</p>
        <p>País: {candidatos.country}</p>
        <p>Profissão: {candidatos.profession}</p>
      </Container7>
      <BotaoAprovar onClick={() => aprovar(candidatos.id, true)}>Aprovar</BotaoAprovar>
      <BotaoNegar onClick={() => aprovar(candidatos.id, false)}>Negar</BotaoNegar>
    </Container8>
  })
  console.log(permissao)
  return (
    <MainContainer>
      <BotaoVoltar onClick={backPage}>Voltar</BotaoVoltar>
      <Titulo>
        <h1><b>DETALHE VIAGEM</b></h1>
      </Titulo>
      <ContainerPai>
        <ContainerInfo>
          <b>Titulo: </b>{id.name}<br />
          <b>Descrição: </b>{id.description}<br />
          <b>Planeta: </b>{id.planet}<br />
          <b>Duração de: </b>{id.durationInDays} Dias<br />
          <b>Data: </b>{id.date}
        </ContainerInfo>
        <ContainerPaiCandidatos>
          <ContainerAprovados>
            <h3>Candidatos aprovados</h3>
            {confirmados}
          </ContainerAprovados>
          <ContainerParaAprovar>
            <h3>Candidatos para aprovar</h3>
            {idCan}
          </ContainerParaAprovar>
        </ContainerPaiCandidatos>
      </ContainerPai>
    </MainContainer>
  );
}

export default TripDetailsPage;