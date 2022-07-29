import styled from "styled-components";

export const MainContainer = styled.div`
width:100%;
background:${props => props.backColor};
`
export const Input = styled.input`
height: 17vh;
margin-bottom:1%;
width: 100%;
border-radius: 12px;
background:#EDEDED;
border-color:none;
border:none;
font-family: 'Noto Sans', sans-serif;
vertical-align:text-top;
`
export const ContainerInteracao = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:90%;
margin:3%;
`
export const Form = styled.form`
width:100%;
height:100%;
align-items:center;
display:flex;
flex-direction:column;
justify-content:center;
`
export const MainContainerInteracaoUsuario = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const MainContainerMap = styled.div`
background-color:#FBFBFB;
box-shadow: 0 0 0.1em #878787;
display:flex;
align-items:flex-start;
flex-direction:column;
justify-content:center;
margin:3%;
border-radius:9px;
`
export const ContainerUsuario = styled.div`
color:grey;
align-items:left;
font-family: 'Noto Sans', sans-serif;
padding-left:1.4%;
padding-top:1%;
`
export const ContainerBody = styled.div`
padding:4% 0% 4% 1%;
font-family: 'Noto Sans', sans-serif;
display:flex;
flex-wrap:wrap;
`
export const MainContainerInteracao = styled.div`
display:flex;
`
export const ContainerBotaoInteracao = styled.div`
margin-left:4%;
margin-bottom:5%;
padding-left:4%;
padding-right:4%;
width:15vw;
border:0.1px solid grey;
border-radius:10px;
display:flex;
justify-content:space-between;
color:grey;
`
export const ContainerNumeroComentario = styled.div`
display:flex;
justify-content:space-between;
width:13vw;
border:1px solid grey;
border-radius:10px;
margin-left:4%;
margin-bottom:5%;
`
export const ContainerComentarioNumero = styled.div`
margin-right:7%;
color:grey;
`
export const ContainerComentario = styled.div`
margin-right:5%;
`
export const BotaoComentario = styled.button`
align-items:center;
display:flex;
justify-content:center;
background:none;
border:none;
margin-left:4%;
`
export const BotaoSeta = styled.button`
background:none;
border:none;
`
export const BotaoSetaBaixo = styled.button`
background:none;
border:none;
padding-top:6%;
`
export const BotaoBody = styled.button`
border:none;
background:none;
width:100%;
text-align:left;
`
export const Botao = styled.button`
height: 47px;
border:none;
width: 359px;
left: 33px;
top: 267px;
border-radius: 12px;
padding: 12px, 145px, 12px, 145px;
background-color: #ff6489;
background-image: linear-gradient(160deg, #ff6489 0%, #f9b24e 100%);
font-size: 100%;
font-weight: 700;
color:white;
text-align: center;
margin-top:1.5%;
`
export const Line = styled.img`
width:0.1%;
@media (min-width : 320px) and (max-width : 480px) {
    width:100%;
}
`
export const InputTitulo = styled.input`
border-radius: 3px;
background:#EDEDED;
border-color:none;
border:none;
margin-bottom:2%;
padding:1%;
font-family: 'Noto Sans', sans-serif;
height: 53px;
width: 364px;
border-radius: 12px;
`
export const ContainerGif = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`