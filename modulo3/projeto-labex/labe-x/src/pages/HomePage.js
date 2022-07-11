import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from '@chakra-ui/react'

function HomePage(props) {
  return (
<div>
<h1>LabeX</h1>
    <div>
    <Button colorScheme='purple' onClick={props.tela1}>Ver Viagens</Button>
    <Button colorScheme='blue' onClick={props.tela2}>Área de Admin</Button>
    </div>
</div>
  );
}

export default HomePage;