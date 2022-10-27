import styled from "styled-components"

export const MainContainer = styled.div`
height:100%;
width:100%;
background-color:#E9DEED;
`
export const ContainerCard = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
export const ContainerCardMap = styled.div`
width:16.6%;
/* width:25%; widht 2º */
`
export const CardWrap = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
width:100%;
`
export const MainCard = styled.div`
 height:45vh;
 /* ----------------------------------------- */
`
export const Card = styled.button`
display:flex;
flex-direction:column;
border-radius:10px;
margin-top:10%;
margin-left:10%;
border:none;
background:none;
width:50%;
 /* width:176px; */
`
export const MainContainerTitle = styled.div`
height:25vh;
background-color:#2D0C5E;
display:flex;
flex-direction:column;
`
export const ContainerTitle = styled.div`
`
export const TXTTitle = styled.div`
color:white;
font-weight: 700;
font-size: 20px;
/* mobile 20 font-size -------------*/
line-height: 56px;
text-align: center;
letter-spacing: -0.005em;
`
export const MainContainerGenres = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100vw;
`
export const ContainerGenres = styled.div`
margin:0.2%;
display:flex;
align-items:center;
justify-content:center;
/* width:100vw; */
`
export const ButtonGenres = styled.button`
border-radius: 4px;
padding: 8px 16px 8px 16px;
width:100%;
border:none;
background:${props => props.backgroundColor};
`
export const ContainerFilter = styled.div`
color:white;
display:flex;
align-items:center;
justify-content:center;
padding-bottom:1%;
`
export const ContainerGenresWrap = styled.div`
display:flex;
flex-wrap:wrap;
/* --------------------------------------------------- */
align-items:center;
/* overflow-x: scroll; */
/* para mobile retirar o justify content */
`
export const BlockFilter = styled.div`
/* padding-top:2%; */
`
export const DataFormatada = styled.div`
color:#646464;
font-weight: 300;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.015em;
`
export const MainTitleMovie = styled.div`
`
export const TitleMovie = styled.h2`
font-family: Roboto;
font-size: 22px;
font-weight: 700;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
`
export const ImageMovie = styled.img`
/* border-radius: 10px; */
/* height: 264px; */
/* width: 176px;
 */
width:100%;
height:100%;
left: 112px;
top: 534px;
border-radius: 4px;

`