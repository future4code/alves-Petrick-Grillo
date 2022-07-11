import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from '@chakra-ui/react'

function AdminHomePage(props) {
  return (
<div>
    <h1>Painel Administrativo</h1>
    <div>
    <Button colorScheme='purple' onClick={props.tela0}>Voltar</Button>
    <Button colorScheme='blue' onClick={props.tela5}>Criar Viagem</Button>
    <Button colorScheme='blue'>Logout</Button>
    </div>
</div>
  );
}

export default AdminHomePage;