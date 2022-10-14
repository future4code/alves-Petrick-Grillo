import { useContext } from "react"
import styled from "styled-components"
import GlobalContext from "../Global/GlobalContext"

const MainContainer = styled.div`
height:100vh;
width:100vw;
position:fixed;
`
const ContainerColor = styled.div`
background-color:#EFEFEF;
background-image: radial-gradient(circle at right, transparent 0, transparent 70%, ${props => props.backgroundColor} 41px);
width:100vw;
height:100%;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    background-image: radial-gradient(circle at bottom, transparent 0, transparent 50%, ${props => props.backgroundColor} 41px);
}
`
export function BackGroundSena(props) {
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
            <ContainerColor id="ContainerBack" backgroundColor={colorSena}>
                {props.children}
            </ContainerColor>
        </MainContainer>
    )
}