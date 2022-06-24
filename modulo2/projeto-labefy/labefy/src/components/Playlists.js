import axios from "axios";
import React from "react";
import styled from "styled-components";

const Botao = styled.button`
`

class Playlist extends React.Component {
    state = {
        nomePlaylist: [],
        musicasPlaylists: [],
        nomeMusica: "",
        nomeArtista: "",
        urlLink: "",
        idPlay: "",
    }
    componentDidMount() {
        this.mostrarPlay()
    }

    componentDidUpdate() {
        console.log(this.props.attDados)
        if (this.props.attDados) {
            this.mostrarPlay()
            this.props.setAttDados()
        }
    }
    addMusica = () => {
        const bodyUser = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.urlLink
        };
        this.infoAdd(bodyUser)
    }

    mostrarPlay = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "Petrick-Alves"
            }
        }).then((resposta) => {
            this.setState({ nomePlaylist: resposta.data.result.list })
            console.log("capturado")
        }).catch((erro) => {
            alert(erro.response.data)
        })
    }

    deletarUser = (playlistId) => {
        const confirmar = window.confirm("Tem certeza?")
        if (confirmar === true) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
                headers: {
                    Authorization: "Petrick-Alves"
                }
            }).then(() => {
                this.mostrarPlay()
            }).catch((erro) => {
                console.log(erro.data)
            })
        }
    }
    infoPlay = (playlistId) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, {
            headers: {
                Authorization: "Petrick-Alves"
            }
        }).then((resposta) => {
            this.setState({ musicasPlaylists: resposta.data.result.tracks })
        }).catch((erro) => {
            console.log(erro.data)
        })
    }
    infoAdd = (bodyUser) => {

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlay}/tracks`, bodyUser, {
            headers: {
                Authorization: "Petrick-Alves"
            }
        }).then((resposta) => {
            alert("Concluido!", resposta)
            console.log(resposta)
        }).catch((erro) => {
            alert("Tente novamente, por favor", erro)
            console.log(erro.data)
        })
    }

    onChangeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }
    onChangeArtista = (event) => {
        this.setState({ nomeArtista: event.target.value })
    }
    onChangeUrl = (event) => {
        this.setState({ urlLink: event.target.value })
    }

    render() {
        console.log(this.state.nomePlaylist)
        const renderizarPlaylist = this.state.nomePlaylist.map((usuario) => {
            return <>
                <p>{usuario.name}</p>
                <button onClick={() => this.deletarUser(usuario.id)}>Excluir Playlist</button>
                <button onClick={() => this.infoPlay(usuario.id)}>Detalhes Playlist</button>
                <button onClick={() => this.setState({ idPlay: usuario.id })}>Modificar Playlist</button>
            </>
        });
        const renderizarMusica = this.state.musicasPlaylists.map((musica) => {

            console.log(musica)
            return <>
                <p>Nome da musica: {musica.name}<br /> Banda ou Grupo:{musica.artist} <br /> 
                </p>
                <video width="320" height="240" id="player" controls="controls">
      <source src={`${musica.url}.mp4`} type="video/mp4" />
    </video>
            </>
        })
        // const Selecionar = this.state.nomePlaylist.map((usuario) => {
        //     return<option value="usuario.id">
        //     <p>{usuario.name}</p>
        //     </option>

        // });
        return (
            <div>
                {renderizarPlaylist}
                {renderizarMusica}
                {this.state.idPlay.length > 0 ?
                    <div>
                        <input
                            placeholder="Nome da musica"
                            value={this.state.nomeMusica}
                            onChange={this.onChangeMusica} />
                        <input
                            placeholder="Banda/Artista"
                            value={this.state.nomeArtista}
                            onChange={this.onChangeArtista} />
                        <input
                            placeholder="Link da musica"
                            value={this.state.urlLink}
                            onChange={this.onChangeUrl} />
                        <button onClick={this.addMusica}>Enviar</button>
                    </div>
                    : null}
            </div>
        )
    }
}
export default Playlist