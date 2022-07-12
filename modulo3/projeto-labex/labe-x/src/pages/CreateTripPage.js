import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input, Stack, Select, option } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const MainContainer = styled.div`
height:100vh;
`
function CreateTripPage(props) {
  const navigate = useNavigate()

  const backPage = () =>{
    navigate(-1)
  }
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
        <Button colorScheme='purple' onClick={backPage}>Voltar</Button>
        <Button colorScheme='blue' >Enviar</Button>
      </div>
    </div>
  );
}

export default CreateTripPage;