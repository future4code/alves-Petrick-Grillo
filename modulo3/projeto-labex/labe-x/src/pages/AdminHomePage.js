import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import useProtectedPage from "../Hooks/useProtectedPage";

const MainContainer = styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const ContainerPai = styled.div`
width:70%;
height:20%;
display:flex;
flex-direction:column;
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
  box-shadow:0 0 35px #01F548;
}
`
const BotaoLogout = styled.button`
:hover{
  box-shadow:0 0 35px #F51100;
}
`
const Titulo = styled.div`
color:white;
`
const ContainerMapViagem = styled.div`
border:solid black 1px;
border-radius:5px;
margin-top:2%;
padding:2%;
width:80%;
background-color:#fbe0c2;
display:flex;
justify-content:space-between;
align-items:center;
`
const ContainerTrips = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const BotaoExcluir = styled.button`
:hover{
  box-shadow:0 0 35px red;
  letter-spacing:0em;
}
`
const BotaoInfo = styled.button`
:hover{
  box-shadow:0 0 35px greenyellow;
  letter-spacing:0em;
}
`
const ContainerBotao = styled.div`
`

function AdminHomePage(props) {
  useProtectedPage()
  const [trips, setTrips] = useState("")
  const [refresh, setRefresh] = useState(false)
  const navigate = useNavigate()
  const [id, setId] = useState("")
  const [viagem, setViagem] = useState(true)

  const backPage = () => {
    navigate("/")
  }
  const detailPage = (id) => {
    navigate(`/DetailsTrip/${id}`)
  }
  const createTrip = () => {
    navigate("/CreateTrip")
  }

  const delTrip = (id) => {
    console.log(id)
    const token = localStorage.getItem("token")
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trips/${id}`, {
      headers: {
        auth: token
      }
    }).then((resposta) => {
      setViagem(!viagem)
      console.log(resposta.data.success)
    }).catch((erro) => {
      console.log(erro)
    })
  }
  useEffect(() => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/trips")
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [viagem])

  const viagens = trips && trips.map((viagem, index) => {
    return <ContainerMapViagem key={index}>
      <p><b>{viagem.name}</b></p>
      <div>
        <BotaoInfo onClick={() => detailPage(viagem.id)}>+</BotaoInfo>
        <BotaoExcluir onClick={()=>delTrip(viagem.id)}>X</BotaoExcluir>
      </div>
    </ContainerMapViagem>
  })
  const onClickLimparCache = () => {
    localStorage.clear("token");
    navigate("/Login")
    alert("Sucesso!")
  }
  return (
    <MainContainer>
      <ContainerPai>
        <Titulo>
          <h1>Painel Administrativo</h1>
        </Titulo>
        <div>
          <ContainerBotao>
            <BotaoV onClick={backPage}>Voltar</BotaoV>
            <BotaoCriar onClick={createTrip}>Criar Viagem</BotaoCriar>
            <BotaoLogout onClick={onClickLimparCache}>Logout</BotaoLogout>
          </ContainerBotao>
        </div>
        <ContainerTrips>
          {viagens}
        </ContainerTrips>
      </ContainerPai>
    </MainContainer>
  );
}

export default AdminHomePage;