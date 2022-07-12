import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const MainContainer = styled.div`
height:100vh;
`
function LoginPage() {
  const navigate = useNavigate()

  const backPage = () =>{
    navigate(-1)
  }
  const goToAdminHome = () => {
    navigate("/AdminHome")
  }
  return (
    <div>
      <h1>Login</h1>
      <Button colorScheme="blue" onClick={backPage}>Voltar</Button>
      <Button colorScheme="blue" onClick={goToAdminHome}>Entrar</Button>
    </div>
  );
}

export default LoginPage;