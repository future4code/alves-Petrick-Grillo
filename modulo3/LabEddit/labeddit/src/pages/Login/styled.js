import styled from "styled-components"

export const MainContainer = styled.div`
`
export const Titulo = styled.div`
padding:1%;
margin:2%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const Input = styled.input`
height: 60px;
width: 363px;
left: 0px;
top: 0px;
border-radius: 4px;
border-color:#D5D8DE;
@media (min-width : 320px) and (max-width : 480px) {
    padding:5%;
    width:100%;
    height:5%;
}
`
export const Imagem = styled.img`
#grad {
    background-image: linear-gradient(red, yellow, green);
}
`
export const Container1 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const Container2 = styled.div`
margin-bottom:1%;
@media (min-width : 320px) and (max-width : 480px) {
    margin-bottom:4%;
}
`
export const Container3 = styled.div`
`
export const Container4 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:1%;
`
export const Container5 = styled.div`
`
export const Container6 = styled.div`
position: absolute;
width: 363.01px;
height: 0px;
left: 33px;
top: 656px;

transform: rotate(0.32deg);
`
export const BotaoLogin = styled.button`
width:20%;
align-items:left;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
height: 51px;
width: 365px;
left: 29px;
top: 587px;
border-radius: 27px;
padding: 13px, 133px, 13px, 133px;
font-size: 18px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
color:white;
border:none;
@media (min-width : 320px) and (max-width : 480px) {
    width:60%;
    height: 31px;
    width: 265px;
    margin-top:5%;
    margin-left:4%;
}
`
export const Form = styled.form`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
@media (min-width : 320px) and (max-width : 480px) {
    width:60%;
    margin-bottom:4%;
}
`
export const BotaoCriar = styled.button`
width:20%;
align-items:left;
background: white;
height: 51px;
width: 365px;
left: 29px;
top: 587px;
border-radius: 27px;
padding: 13px, 133px, 13px, 133px;
font-size: 18px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
color:#FE7E02;
border-color:#FE7E02;
@media (min-width : 320px) and (max-width : 480px) {
    width:60%;
    height: 31px;
    width: 265px;
    margin-top:5%;
    margin-left:4%;
}
`
export const Line = styled.img`
width:0.1%;
@media (min-width : 320px) and (max-width : 480px) {
    width:100%;
}
`