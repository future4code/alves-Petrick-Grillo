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
const Container1 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Container2 = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background-color:#fbe0c2;
height:40%;
width:60%;
`
const Container3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Container4 = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background-color:#fbe0c2;
height:40%;
width:60%;
border: 2px solid black;
margin-top:2%;
`
function TripDetailsPage() {
  const navigate = useNavigate()

  const [id, setId] = useState("")
  const [aprovados, setAprovados] = useState("")
  const [candidatos, setCandidatos] = useState("")
  const [idCandidatos, setIdCandidatos] = useState("")
  useProtectedPage()

  const params = useParams()
  const aprovar = 
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${params.id}/candidates/${idCandidatos.id}/decide`, {
    }).then((resposta) => {
      console.log(resposta)
    }).catch((erro) => {
      console.log(erro.response.data)
    })


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
  // console.log(confirmados)
  const confirmados = aprovados && aprovados.map((candidatos) => {
    return <div>
      <p>{candidatos.name}</p>
    </div>
  })
  const idCan = idCandidatos && idCandidatos.map((candidatos) => {
    return <div>
      <p>{candidatos.id}</p>
    </div>
  })
  const backPage = () => {
    navigate("/AdminHome")
  }

  return (
    <MainContainer>
      <Titulo>
        <h1><b>DETALHE VIAGEM</b></h1>
      </Titulo>
      <Container1>
        <Container2>
          <b>Titulo: </b>{id.name}<br />
          <b>Descrição: </b>{id.description}<br />
          <b>Planeta: </b>{id.planet}<br />
          <b>Duração de: </b>{id.durationInDays} Dias<br />
          <b>Data: </b>{id.date}
        </Container2>
      <Container4>
        <h3>Candidatos aprovados</h3>
        {confirmados}
      </Container4>
      <div>
        {idCan}
      </div>
      </Container1>
      <Container3>
        <button onClick={backPage}>Voltar</button>
      </Container3>
    </MainContainer>
  );
}

export default TripDetailsPage;