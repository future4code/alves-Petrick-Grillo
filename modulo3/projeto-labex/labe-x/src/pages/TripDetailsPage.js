import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
height:100vh;
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
  useProtectedPage()
  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trip/RXRYkZOB38JrwAayAelf", {
      headers: {
        auth: token
      }
    })
      .then((resposta) => {
        console.log(resposta.data.trip)
      }).catch((erro) => {
        console.log(erro.response)
      })
  }, [])
  const backPage = () => {
    navigate(-1)
  }
  return (
    <div>
      <h1><b>DETALHE VIAGEM</b></h1>

      <button onClick={backPage}>Voltar</button>
    </div>
  );
}

export default TripDetailsPage;