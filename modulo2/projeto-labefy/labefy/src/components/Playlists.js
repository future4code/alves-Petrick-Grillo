import axios from "axios";
import React from "react";
import styled from "styled-components";

const Botao = styled.button`
`
const TituloPlaylist = styled.p`
background-color:black;
color:white;
margin-top:2%;
border-radius:10px;
box-shadow: 0 0 1em green;
padding-top:1%;
padding-bottom:1%;
display:flex;
justify-content:center;
margin-left:40%;
margin-right:40%;
`
const BotaoInteracao = styled.button`
margin-left:40%;
margin-right:40%;
margin-top:1%;
margin-bottom:1%;
`
const ConteinerInfo = styled.div`
justify-content:center;
display: flex;
    align-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: column;
`
const ConteinerVideo = styled.div`
display:flex;
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
                <ConteinerInfo>
                    <div>
                <TituloPlaylist>{usuario.name}</TituloPlaylist>
                    </div>
                <BotaoInteracao onClick={() => this.deletarUser(usuario.id)}>Excluir Playlist</BotaoInteracao>
                <BotaoInteracao onClick={() => this.infoPlay(usuario.id)}>Detalhes Playlist</BotaoInteracao>
                <BotaoInteracao onClick={() => this.setState({ idPlay: usuario.id })}>Modificar Playlist</BotaoInteracao>
                </ConteinerInfo>
            </>
        });
        const renderizarMusica = this.state.musicasPlaylists.map((musica) => {

            console.log(musica)
            return <>
                <p>Nome da musica: {musica.name}<br /> Banda ou Grupo:{musica.artist} <br /> 
                </p>
                <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe> 
            </>
        })
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