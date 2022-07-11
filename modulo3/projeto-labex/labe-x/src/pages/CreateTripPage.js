import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input, Stack, Select, option } from '@chakra-ui/react'

function CreateTripPage(props) {
  return (
    <div>
      <h1>Criar Viagem</h1>
      <div>
        <div>
          <Stack spacing={5}>
            <Input variant='filled' placeholder='Nome da viagem' />
            <Select variant='filled' placeholder='Escolha um planeta'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Input variant='filled' placeholder='Idade' />
            <Input variant='filled' placeholder='Descrição' />
            <Input variant='filled' placeholder='Duração em dias' />
          </Stack>
        </div>
        <Button colorScheme='purple' onClick={props.tela3}>Voltar</Button>
        <Button colorScheme='blue' onClick={props.tela2}>Enviar</Button>
      </div>
    </div>
  );
}

export default CreateTripPage;