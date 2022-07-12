import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"

const MainContainer = styled.div`
height:100vh;
`

function AdminHomePage(props) {
const navigate = useNavigate()

const backPage = () =>{
  navigate(-1)
}
const createTrip = () =>{
  navigate("/CreateTrip")
}
  return (
<div>
    <h1>Painel Administrativo</h1>
    <div>
    <Button colorScheme='purple' onClick={backPage}>Voltar</Button>
    <Button colorScheme='blue' onClick={createTrip}>Criar Viagem</Button>
    <Button colorScheme='blue'>Logout</Button>
    </div>
</div>
  );
}

export default AdminHomePage;