import React from "react";
import { Box, Button, ButtonGroup, extendTheme, Text } from '@chakra-ui/react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const MainContainer = styled.div`
height:100vh;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const ErroTexto = styled.h1`
`
function ErrorPage() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    return (
        <MainContainer>
            <Box>
                <Text fontSize={32}>ERRO! Pagina nao encontrada</Text>
            </Box>
            <Button textStyle="h1" onClick={goToHome}>Pagina Inicial</Button>
        </MainContainer>

    )
}
export default ErrorPage;