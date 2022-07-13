import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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
`
export const useProtectedPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token === null) {
      navigate("/Login")
    }
  }, [])
}
function TripDetailsPage() {
  const navigate = useNavigate()

  const [id, setId] = useState("")
  useProtectedPage()

  const params = useParams()
  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trip/${params.id}`, {
      headers: {
        auth: token
      }
    }).then((resposta) => {
      setId(resposta.data.trip)
    }).catch((erro) => {
      console.log(erro.response.data)
    })
  }, [])
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
      </Container1>
      <Container3>
        <button onClick={backPage}>Voltar</button>
      </Container3>
    </MainContainer>
  );
}

export default TripDetailsPage;