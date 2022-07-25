import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../Global/GlobalContext';
import styled from 'styled-components';
import Logo from "../../img/Logo.png"

const Container1 = styled.div`
`
const Container2 = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const Container3 = styled.div`
padding:1%;
box-shadow: 0 0 1em black;
background-color: #EDEDED;

`
const Container4 = styled.div`
`
const Container5 = styled.div`
`
const Container6 = styled.div`
`
const Container7 = styled.div`
`
const BotaoX = styled.button`
background:none;
border:none;
color:#4088CB;
font-weight: 600;
font-size: 18px;
line-height: 25px;
letter-spacing:0.1em;
width: 33.3em;
text-align:left;
`
const BotaoAcao = styled.button`
background:none;
border:none;
color:#4088CB;
font-weight: 600;
font-size: 18px;
line-height: 25px;
letter-spacing:0.1em;
width: 33.3em;
text-align:right;
`

export default function ButtonAppBar() {
    const navigate = useNavigate()

    const goToPosts = () => {
        navigate("/ListaPost")
    }
    const goToLogin = () => {
        navigate("/")
    }
    const logout = () => {
        localStorage.removeItem("token")
    }
    const token = localStorage.getItem("token")
    // const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

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
                    <BotaoX onClick={goToPosts}>X</BotaoX>
                    <div>
                        <img src={Logo} width={30} />
                    </div>
                    <BotaoAcao onClick={rightButtonAction}>{rightButtonText}</BotaoAcao>
                </Container2>
            </Container3>
        </Container1>
    );
}

