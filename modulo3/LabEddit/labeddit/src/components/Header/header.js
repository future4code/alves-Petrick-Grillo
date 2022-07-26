import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../Global/GlobalContext';
import styled from 'styled-components';
import Logo from "../../img/Logo.png"
import DarkMode from "../../img/DarkMode.png"
import SolMode from "../../img/SolMode.png"

const Container1 = styled.div`
width:100%;
`
const Container2 = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const Container3 = styled.div`
padding:1%;
/* box-shadow: 0 0 1em black; */
background-color: #EDEDED;
display:flex;
flex-direction:column;
`
const Botao = styled.button`
border:none;
`
const BotaoX = styled.button`
background:none;
border:none;
color:#4088CB;
font-weight: 600;
font-size: 18px;
line-height: 25px;
letter-spacing:0.1em;
width: 5em;
text-align:left;
`
const BotaoAcao = styled.button`
background:none;
border:none;
color:#4088CB;
font-weight: 600;
font-size: 18px;
line-height: 25px;
letter-spacing:0.03em;
width: 5em;
text-align:right;
`

export default function ButtonAppBar() {
    const navigate = useNavigate()

    const goToPosts = () => {
        navigate("/ListaPost")
    }
    const [mode, setMode] = useState(true)
    const [color, setColor] = useState(mode ? "white" : "#27282c")
    const [corMode, setCorMode] = useState(mode ? SolMode : DarkMode)
    const goToLogin = () => {
        navigate("/")
    }
    console.log(mode)
    const changeBackground = () => {
        setMode(!mode)
    }
    const logout = () => {
        localStorage.removeItem("token")
    }
    const token = localStorage.getItem("token")
    const { rightButtonText, setRightButtonText } = useContext(GlobalContext)
    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin()
        } else {
            goToLogin()
        }
    }
    return (
        <Container1>
            <Container3>
                <Container2>
                    <BotaoX onClick={goToPosts}>Voltar</BotaoX>
                    <Botao onClick={changeBackground}>
                        <img src={corMode} width={30} />
                        {/* <img src={Logo} width={30} /> */}
                    </Botao>
                    <BotaoAcao onClick={rightButtonAction}>{rightButtonText}</BotaoAcao>
                </Container2>
            </Container3>
        </Container1>
    );
}

