import { useContext } from "react"
import styled from "styled-components"
import GlobalContext from "../Global/GlobalContext"

const MainContainer = styled.div`
height:100vh;
width:100vw;
position:fixed;
`
const ContainerColor = styled.div`
background-image: radial-gradient(circle at right, transparent 0, transparent 70%, green 41px);
width:100vw;
height:100%;
`
const ContainerWhite = styled.div`
background: #EFEFEF;
width:100%;
height:100%;
`
export function BackGroundSena() {
    const { concurso } = useContext(GlobalContext)
    const colorSena = {
        0: "#6BEFA3",
        1: "#8666EF",
        2: "#DD7AC6",
        3: "#FFAB64",
        4: "#5AAD7D",
        5: "#BFAF83"
    }[concurso.loteria]
    return (
        <MainContainer>
            <ContainerWhite>
                <ContainerColor backgroundColor={colorSena}>
                </ContainerColor>
            </ContainerWhite>
        </MainContainer>
    )
}