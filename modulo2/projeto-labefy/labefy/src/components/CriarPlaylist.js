import axios from "axios";
import React from "react";
import styled from "styled-components";
import Playlist from "./Playlists";

const MainContainer = styled.div`
background-color:#D5FBFF;
border: 20px solid #9FBCBF;
`
const ContainerTopo = styled.div`
display:flex;
justify-content:center;
`
const EspaçoPergunta = styled.input`
margin-top:1%;
margin-left:1%;
border: 2px solid black;
background-color: white;
  padding-left: 40px;

`
const ConteinerBotao = styled.div`
padding-top:1%;
margin-left:1%;
`
const ConteinerInfo = styled.div`
/* display:flex; */
`
const BotaoEnvio = styled.button`
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
background-color:#59D8E6;
:hover {
    /* box-shadow: inset 1px 1px 10px white, 1px 1px 10px white; */
    color: black;
    border: 1px solid #E4F2E7;
    cursor: pointer;
}
`

class CriarPlaylist extends React.Component {
    state = {
        playlist: "",
        attDados: false,
    }
    componentDidUpdate() {
    }
    addPlay = () => {
        const bodyUser = {
            name: this.state.playlist
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists?=", bodyUser, {
            headers: {
                Authorization: "Petrick-Alves"
            }
        }
        ).then((resposta) => {
            this.setState({ attDados: true })
            alert("Concluido!", resposta)
        }).catch((erro) => {
            alert("Tente novamente, por favor.", erro)
            console.log(erro.response.data.message)
        })
    };
    onChangePlaylist = (event) => {
        this.setState({ playlist: event.target.value })
    }
    render() {
        console.log(this.state)
        return (
            <MainContainer>
                <ContainerTopo>

                    <EspaçoPergunta
                        placeholder="Nome da playlist"
                        value={this.state.playlist}
                        onChange={this.onChangePlaylist}
                        />
                    <ConteinerBotao>
                        <BotaoEnvio onClick={this.addPlay}>Enviar</BotaoEnvio>
                    </ConteinerBotao>
                </ContainerTopo>
                        <ConteinerInfo>
                <Playlist attDados={this.state.attDados} setAttDados={() => this.setState({ attDados: false })} />
                        </ConteinerInfo>
            </MainContainer>
        )
    }
}

export default CriarPlaylist