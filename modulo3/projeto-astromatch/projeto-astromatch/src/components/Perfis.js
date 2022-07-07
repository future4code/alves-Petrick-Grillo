import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const MainConteiner = styled.div`
border: 1px solid black;
background-color:white;
    `
const Header = styled.div`
    `
const ConteinerPerfil = styled.div`
border: 1px solid black;
width:30vw;
height:43vh;
    `
const Perfil = styled.div`
height:80%;
width:100%;
    `
const ConteinerFoto = styled.div`
width:100%;
height:100%;
    `
const BotaoProximo = styled.button`
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
justify-content:center;
flex-direction:row;
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
                <button onClick={props.tela}>Ver matches</button>
            </Header>
            <h2>AstroMach</h2>
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
                <BotaoProximo onClick={pegarPerfil}>Dislike</BotaoProximo>
                <BotaoProximo onClick={pegarMatches}>Like</BotaoProximo>
                <BotaoProximo onClick={limparPerfil}>Limpar Matches</BotaoProximo>
            </ConteinerBotoes>
        </section>
            : <section>
                <Header>
                    <button onClick={props.tela}>Ver matches</button>
                </Header>
                <h2>AstroMach</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Broken_heart.svg/1200px-Broken_heart.svg.png" width={200}
                height={200}></img>
                <div>
                    <BotaoProximo onClick={limparPerfil} >Procurar novas pessoas</BotaoProximo>
                </div>
            </section>}
        </MainConteiner>
    );
}

export default Perfis;