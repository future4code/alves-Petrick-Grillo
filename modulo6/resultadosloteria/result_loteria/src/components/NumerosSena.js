import { useContext, useEffect } from "react";
import styled from "styled-components";
import GlobalContext from "../Global/GlobalContext";

const MainContainer = styled.div`
width:100%;
height:100%;
`
const ContainerNumeros = styled.div`
height:100%;;
width:100%;
display:flex;
flex-wrap:wrap;
`
const Numeros = styled.div`
padding:1%;
margin:1%;
width:4%;
height:6.8vh;
font-size: 28px;
font-weight: 700;
border-radius:50%;
 background: white;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
`

export function NumerosSena() {
    const { concurso } = useContext(GlobalContext)
    console.log(concurso)
    console.log(concurso.numeros)
    const numeros = concurso.numeros
    const numerosRenderizados = numeros.map((parametro) => {
        return <Numeros> {parametro} </Numeros>
    })
    return (
        <MainContainer>
            <ContainerNumeros>
                {numerosRenderizados}
            </ContainerNumeros>
        </MainContainer>
    )
}