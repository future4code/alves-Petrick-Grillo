import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import useForm from "../Hooks/useForm";

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
display:flex;
`
function LoginPage() {

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token)
    {
      token === null ?
        navigate("/Login") :
        navigate("/AdminHome")
    }
  }, [])
  const navigate = useNavigate()
const {form, onChange} = useForm ({email:"", password:""})
  console.log(form)
  const onSubmitLogin = (event) => {
    event.preventDefault(event)
    const body = {
      email: form.email,
      password: form.password,
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
        <BotaoV onClick={backPage}>Voltar</BotaoV>
        <h1>Login</h1>
      </Titulo>
      <form onSubmit={onSubmitLogin}>
        <div>
          <input
            name="email"
            placeholder="E-mail"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            name="password"
            placeholder="Senha"
            type="password"
            value={form.password}
            onChange={onChange}
            required
            pattern="^.{6,}"
            title="Sua senha deve ter no minio 6 caracteres"
          />
        </div>
        <BotaoEntrar >Entrar</BotaoEntrar>
      </form>
    </div>
  );
}

export default LoginPage;