import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from '@chakra-ui/react'

function ListTripsPage(props) {
  return (
<div>
    Viagens
    <div>
    <Button colorScheme='purple' onClick={props.tela0}>Voltar</Button>
    <Button colorScheme='purple' onClick={props.tela4}>Inscrever-se</Button>
    </div>
</div>
  );
}

export default ListTripsPage;