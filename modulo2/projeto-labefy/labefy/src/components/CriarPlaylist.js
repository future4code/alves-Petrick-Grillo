import axios from "axios";
import React from "react";
import styled from "styled-components";
import Playlist from "./Playlists";

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
            <div>
                <input
                    placeholder="Nome da playlist"
                    value={this.state.playlist}
                    onChange={this.onChangePlaylist}
                />
                <button onClick={this.addPlay}>Enviar</button>
                <Playlist attDados={this.state.attDados} setAttDados={() => this.setState({ attDados: false })} />
            </div>
        )
    }
}

export default CriarPlaylist