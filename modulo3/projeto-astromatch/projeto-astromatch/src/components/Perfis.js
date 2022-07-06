import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const MainConteiner = styled.div`
    `
const Header = styled.div`
    `
const ConteinerPerfil = styled.div`
border: 1px solid black;
width:30vw;
height:45vh;
    `
const Perfil = styled.div`
display:flex;
align-items:center;
flex-direction:column;
height:50%;
width:100%;
    `
const BotaoProximo = styled.button`
    `
const ConteinerBio = styled.div`
width:50%;
height:50%;
`
const ConteinerBotoes = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
`
function Perfis(props) {

    const [perfis, setPerfilList] = useState(``)
    const [Matche, setMatche] = useState("")

    const pegarPerfil = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Petrick/person", {
        }).then((resposta) => {
            setPerfilList(resposta.data.profile)
            // console.log(resposta.data.profile)
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
            console.log(resposta.data.isMatch)
            if (resposta.data.isMatch === true) {
                alert("Deu match!")
            }
        }).catch((erro) => {
            console.log(erro)
        })
    }
    const limparPerfil = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Petrick/clear", {
        }).then((resposta) => {
            alert("Limpo!")
        }).catch((erro) => {
            console.log(erro)
        })
    }

    useEffect(() => {
        pegarPerfil()
    }, [])
    useEffect(() => {
        verificaPerfil()
    }, [])
// console.log(perfis)
const verificaPerfil = ()=> {
if(perfis === null){
    return limparPerfil, alert("Resetamos sua busca!")
}}

    return (
        <MainConteiner>
            <Header>
                <button onClick={props.tela}>Ver matches</button>
            </Header>
            <ConteinerPerfil>
                <Perfil>
                <h5>Perfis</h5>
                {perfis.name},
                {perfis.age}<br />
                <img src={perfis.photo} width={200} height={200}></img><br />
                <ConteinerBio>
                    {perfis.bio}<br />
                </ConteinerBio>
                </Perfil>
            </ConteinerPerfil>
                <ConteinerBotoes>
                <BotaoProximo onClick={pegarPerfil}>Dislike</BotaoProximo>
                <BotaoProximo onClick={pegarMatches}>Like</BotaoProximo>
                <BotaoProximo onClick={limparPerfil}>Limpar Matches</BotaoProximo>
                </ConteinerBotoes>
        </MainConteiner>
    );
}

export default Perfis;