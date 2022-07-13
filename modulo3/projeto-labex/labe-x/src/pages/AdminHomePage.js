import React from "react";
import styled from "styled-components";
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
    <button colorScheme='purple' onClick={backPage}>Voltar</button>
    <button colorScheme='blue' onClick={createTrip}>Criar Viagem</button>
    <button colorScheme='blue'>Logout</button>
    </div>
</div>
  );
}

export default AdminHomePage;