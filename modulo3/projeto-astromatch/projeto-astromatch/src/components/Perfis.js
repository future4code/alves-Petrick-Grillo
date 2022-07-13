import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const MainConteiner = styled.div`
    `
const Header = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
border: 3px solid black;
margin-bottom:1.5%;
h2{
    padding-left:7%;
}
box-shadow: 0 0 1em pink;
border-radius:5px;
    `
const ConteinerPerfil = styled.div`
border: 1px solid black;
width:30vw;
height:43vh;
box-shadow: 0 0 1em pink;
    `
const Perfil = styled.div`
height:80%;
width:100%;

    `
const ConteinerFoto = styled.div`
width:100%;
height:100%;
    `
const BotaoLike = styled.button`
  background-color:#FFF1CC;
  border:0px solid black;
  color: white;
  margin-top: 10px;
  transition-duration: 0.6s;
  padding:5px 15px 5px 15px;
  border-radius:10px;
  cursor: pointer;     
   :hover {
        cursor: pointer;
        background-color: #E2D8D6;
        color: #952030;
      }
    `
const BotaoMatch = styled.button`
 background-color:#FFF1CC;
 border:0px solid black;
 cursor: pointer; 
 transition-duration: 0.6s;
 border-radius:10px;
 :hover {
        cursor: pointer;
        background-color: #E2D8D6;
        color: #952030;
      }
`
const ConteinerBio = styled.footer`
display:flex;
background-color:white;
width:100%;
height:25%;
`
const BlurBio = styled.div`
margin:1%;
border-radius:5px;
background-color: rgba(212,196,245,.7);
opacity:1;
font-weight:bold;
width:100%;
`
const ConteinerBotoes = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:row;
margin-top:3%;
border-radius:5px;
`
const ConteinerEstilo = styled.div`
border-bottom: 5px solid #E6C58C;
border-left:5px solid #E6C58C;
border-right:5px solid #E6C58C;
`
function Perfis(props) {
    const [perfis, setPerfilList] = useState(``)
    const [atualizar, setAtualizar] = useState(false)
    const pegarPerfil = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Petrick/person", {
        }).then((resposta) => {
            setPerfilList(resposta.data.profile)
        }).catch((erro) => {
            console.log(erro.data)
        })
    }
    const pegarMatches = () => {
        const bodyUser = {
            id: perfis.id,
            choice: true
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Petrick/choose-person", bodyUser
        ).then((resposta) => {
            pegarPerfil()
            if (resposta.data.isMatch === true) {
                alert("Deu match!")
            }
        }).catch((erro) => {
            console.log(erro)
        })
    }
    const limparPerfil = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Petrick/clear", {
        }).then(() => {
            alert("Limpo!")
            setAtualizar(!atualizar);
        }).catch((erro) => {
            console.log(erro)
        })
    }
    useEffect(() => {
        pegarPerfil()
    }, [atualizar])
    return (
        <MainConteiner>{perfis ? <section>
            <Header>
                <h2>AstroMach</h2>
                <BotaoMatch onClick={props.tela}><img src="https://lh3.googleusercontent.com/pBuYxuLPcmWYiQDLgVJzEnP-AAuXwswMB0z0r3ghaPpbYTm-3LL5LeNH_dpMgx4p9YE" width={40}></img></BotaoMatch>
            </Header>
            <ConteinerEstilo>

            <ConteinerPerfil>
                <Perfil>
                    <ConteinerFoto>
                        <img src={perfis.photo} width="100%" height="125%"></img><br />
                    </ConteinerFoto>
                    <ConteinerBio>
                        <BlurBio>{`
                            ${perfis.name},
                            ${perfis.age}`
                        }
                            <br />{perfis.bio}
                        </BlurBio>
                    </ConteinerBio>
                </Perfil>
            </ConteinerPerfil>
            <ConteinerBotoes>
                <BotaoLike onClick={pegarPerfil}><img src="https://logodix.com/logo/306582.png" width={50} height={50}></img></BotaoLike>
                <BotaoLike type="button" onClick={pegarMatches}><img src="https://imagepng.org/wp-content/uploads/2017/10/coracao.png" width={40} height={40}></img></BotaoLike>
            </ConteinerBotoes>
                        </ConteinerEstilo>
        </section>
            : <section>
                <div>
                    <button onClick={props.tela}>Ver matches</button>
                </div>
                <h2>AstroMach</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Broken_heart.svg/1200px-Broken_heart.svg.png" width={200}
                    height={200}></img>
                <div>
                    <button onClick={limparPerfil} >Procurar novas pessoas</button>
                </div>
            </section>}
        </MainConteiner>
    );
}

export default Perfis;