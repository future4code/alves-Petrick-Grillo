import styled from "styled-components";

export const MainContainer = styled.div`
background:${props => props.backColor};
height: 100vh;
`
export const Titulo = styled.div`
font-size: 33px;
font-weight: 700;
line-height: 43px;
letter-spacing: 0em;
text-align: left;
color:#FE7E02;
`
export const Input = styled.input`
height: 60px;
width: 363px;
left: 0px;
top: 0px;
border-radius: 4px;
border-color:grey;
margin:1%;
`
export const Form = styled.form`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
export const BotaoCadastro = styled.button`
height: 51px;
width: 365px;
left: 32px;
top: 785px;
border-radius: 27px;
padding: 13px, 133px, 13px, 133px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
color:white;
font-size: 18px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
border:none;
`