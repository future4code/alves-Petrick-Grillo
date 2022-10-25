import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../img/TMDB-logo-branca.png"

export const MainContainer = styled.div`
height:100%;
width:100%;
`
export const Container1 = styled.div`
padding-left:5%;
/* height:5%; */
background-color:#5C16C5;
display:flex;
align-items:center;
`
export const ImageLogo = styled.img`
height:40px;
`
export const ButtonLogo = styled.button`
height:50%;
background:none;
border:0;
display:flex;
`
export function Header() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    return (
        <MainContainer>
            <Container1>
                <ButtonLogo onClick={goToHome}>
                    <ImageLogo src={logo} />
                </ButtonLogo>
            </Container1>
        </MainContainer>
    )
}