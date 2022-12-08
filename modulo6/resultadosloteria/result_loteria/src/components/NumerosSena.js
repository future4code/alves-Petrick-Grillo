import { useContext, useEffect } from "react";
import styled from "styled-components";
import GlobalContext from "../Global/GlobalContext";
import logo from "../img/logo.svg"

const MainContainer = styled.div`
width:100%;
height:80%;
`
const MainContainerInfo = styled.div`
height:100%;;
width:100%;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
flex-direction:column;
}
`
const ContainerNameLoteria = styled.div`
width:30%;
height:100%;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width:100%;
height:55%;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
flex-direction:column;
}
`
const ContainerNumeros = styled.div`
width:70%;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width:100%;
height:45%;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
}
`
const Numeros = styled.div`
padding:1.1%;
margin:0.5%;
width:6vw;
height:7.8vh;
font-size: 28px;
font-weight: 700;
border-radius:50%;
 background: white;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
padding:2.1%;
margin:0.5%;
width:10vw;
height:5.8vh;
font-size: 28px;
font-weight: 700;
border-radius:50%;
 background: white;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
}
`
const NomeLoteria = styled.h1`
color:white;
`

export function NumerosSena() {
    const { concurso } = useContext(GlobalContext)
    const nomesSena = {
        0: "Mega Sena",
        1: "Quina",
        2: "Loto Facil",
        3: "Loto Mania",
        4: "Time Mania",
        5: "Dia de Sorte"
    }[concurso.loteria]
    console.log(concurso)
    console.log(concurso.numeros)
    const numeros = concurso.numeros
    const numerosRenderizados = numeros.map((parametro) => {
        return <Numeros> {parametro} </Numeros>
    })
    return (
        <MainContainer>
            <MainContainerInfo>
                <ContainerNameLoteria>
                    <img src={logo} />
                    <NomeLoteria>
                        {nomesSena}
                    </NomeLoteria>
                </ContainerNameLoteria>
                <ContainerNumeros>
                    {numerosRenderizados}
                </ContainerNumeros>
            </MainContainerInfo>
        </MainContainer>
    )
}