import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input, Stack, Select } from '@chakra-ui/react'

function ApplicationFormPage(props) {
  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <div>
        <div>
          <Stack spacing={5}>
          <Select variant='filled' placeholder='Escolha uma viagem'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Input variant='filled' placeholder='Nome' />
            <Input variant='filled' placeholder='Idade' />
            <Input variant='filled' placeholder='Texto de Candidatura' />
            <Input variant='filled' placeholder='Profissão' />
            <Select variant='filled' placeholder='Escolha seu País' />
          </Stack>
        </div>
        <Button colorScheme='purple' onClick={props.tela1}>Voltar</Button>
        <Button colorScheme='blue' onClick={props.tela2}>Enviar</Button>
      </div>
    </div>
  );
}

export default ApplicationFormPage;