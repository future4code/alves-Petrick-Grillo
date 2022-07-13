import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useProtectedPage } from "./TripDetailsPage";

const MainContainer = styled.div`
height:100vh;
`
const BotaoV = styled.button`
:hover{
  box-shadow:0 0 35px #EDE18C;
}
`
const BotaoEntrar = styled.button`
:hover{
  box-shadow:0 0 35px #9FF5B5;
}
`
const Titulo = styled.div`
color:white;
`
function LoginPage() {
  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token)
    {token === null ?
      navigate("/Login"):
      navigate("/AdminHome")} 
  }, [])
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onSubmitLogin = () => {
    console.log(email, password)
    const body = {
      email: email,
      password: password,
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Petrick-Alves/login", body)
      .then((resposta) => {
        console.log(resposta.data.token);
        localStorage.setItem("token", resposta.data.token)
        goToAdminHome()
      }).catch((erro) => {
        alert(erro.response.data.message)
      })
  }
  const backPage = () => {
    navigate("/")
  }
  const goToAdminHome = () => {
    navigate("/AdminHome")
  }
  return (
    <div>
      <Titulo>
        <h1>Login</h1>
      </Titulo>
      <div>
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <BotaoV onClick={backPage}>Voltar</BotaoV>
      <BotaoEntrar onClick={onSubmitLogin}>Entrar</BotaoEntrar>
    </div>
  );
}

export default LoginPage;