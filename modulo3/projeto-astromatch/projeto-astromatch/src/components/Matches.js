import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const MainConteiner = styled.div`
display:flex;
flex-direction:column;
`
const TabelaMatche = styled.div`
display:grid;
grid-template-columns:1fr 1fr ;
`
const ConteinerMatch = styled.div`
    border: 3px solid black;
    padding:3%;
    display:flex;
    align-items:center;
    `
const TextoPessoa = styled.p`
    padding-left:15px;
    `
const ImagemPerfil = styled.img`
border-radius:50px;
`
const ContainerBotao = styled.div`
`

function Matches(props) {
    const [matcheList, setMatcheList] = useState([])

    useEffect(() => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Petrick/matches")
            .then((res) => {
                setMatcheList(res.data.matches)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    const limparPerfil = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Petrick/clear", {
        }).then(() => {
            alert("Limpo!")
        }).catch((erro) => {
            console.log(erro)
        })
    }
    const Matches = matcheList.map(pessoa => {
        return (
            <ConteinerMatch key={pessoa.name} value={pessoa.name}>
                <ImagemPerfil src={pessoa.photo} width={50} height={50}></ImagemPerfil>
                <TextoPessoa>
                    {pessoa.name}, {pessoa.age}
                </TextoPessoa>

            </ConteinerMatch>
        );
    });
    return (
        <MainConteiner>
            <button onClick={props.tela1}>Ver Perfis</button>
            <TabelaMatche>
                {Matches}
            </TabelaMatche>
            <button onClick={limparPerfil}>Limpar Matches</button>
        </MainConteiner>
    );
}

export default Matches;