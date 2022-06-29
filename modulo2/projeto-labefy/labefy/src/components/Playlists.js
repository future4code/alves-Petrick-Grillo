import axios from "axios";
import React from "react";
import styled from "styled-components";

const Botao = styled.button`
`
const TituloPlaylist = styled.p`
background-color:#647678;
color:black;
font-weight: bold;
margin-top:2%;
border-radius:10px;
padding-top:1%;
padding-bottom:1%;
display:flex;
justify-content:center;
/* margin-left:40%; */
/* margin-right:40%; */
/* padding-left:0.5%; */
width:100%;
`
const BotaoInteracao = styled.button`
/* margin-left:40%; */
/* margin-right:40%; */
margin-top:1%;
margin-bottom:1%;
width:100%;

:hover {
    box-shadow: inset 1px 1px 10px #63A69F, 1px 1px 10px white;
    color: black;
    border: 3px solid #E4F2E7;
    cursor: pointer;
}
border-radius: 15px;
background-color: #59D8E6;
`
const ConteinerInfo = styled.div`
display:flex;
flex-direction: column;
width:33%;
padding-left:2%;
`
const ConteinerGrade = styled.div`
display: flex;
align-content: flex-start;
align-items: stretch;
    flex-wrap: nowrap;
    flex-direction: column;
`
const ConteinerVideo = styled.div`
display:grid;
grid-template-columns: 30%, 50%;
`
const PerguntaInfo = styled.input`
margin-top:1%;
margin-left:1%;
border: 2px solid black;
background-color: white;
  padding-left: 40px;
  margin-bottom:1%;
  display:flex;
`
const BotaoInfo = styled.button`
  margin-bottom:1%;
  margin-left:1%;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
background-color:#59D8E6;
:hover {
    color: black;
    border: 1px solid #E4F2E7;
    cursor: pointer;
}
`
const VideoDetalhes = styled.iframe`
`
const ConteinerDetalhes = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:40%;
`
const TituloMusica = styled.p`
background-color:#C9DDFF;
color:black;
font-weight: bold;
margin-top:2%;
border-radius:10px;
padding-top:1%;
padding-bottom:1%;
display:flex;
justify-content:center;
padding-left:1%;
width:50%;
`
const Teste1 = styled.div`
width:100%;
`
const Teste2 = styled.div`
width:90%;
grid-column:2/2;
display:flex;
flex-wrap:wrap;
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
                <TituloPlaylist>{usuario.name}</TituloPlaylist>
                <BotaoInteracao onClick={() => this.deletarUser(usuario.id)}>Excluir Playlist</BotaoInteracao>
                <BotaoInteracao onClick={() => this.infoPlay(usuario.id)}>Detalhes Playlist</BotaoInteracao>
                <BotaoInteracao onClick={() => this.setState({ idPlay: usuario.id })}>Modificar Playlist</BotaoInteracao>
                </ConteinerInfo>
            </>
        });
        const renderizarMusica = this.state.musicasPlaylists.map((musica) => {
            console.log(musica)
            return <ConteinerDetalhes>
                <TituloMusica>Nome da musica: {musica.name}<br /> Banda ou Grupo:{musica.artist} <br /> 
                </TituloMusica>
                <VideoDetalhes width="220" height="215"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</VideoDetalhes> 
            </ConteinerDetalhes>
        })
        return (
            <div>
                <ConteinerGrade>
                    <ConteinerVideo>
                        <Teste1>
                {renderizarPlaylist}
                        </Teste1>
                        <Teste2>
                {renderizarMusica}
                        </Teste2>
                    </ConteinerVideo>
                {this.state.idPlay.length > 0 ?
                    <div>
                        <PerguntaInfo
                            placeholder="Nome da musica"
                            value={this.state.nomeMusica}
                            onChange={this.onChangeMusica} />
                        <PerguntaInfo
                            placeholder="Banda/Artista"
                            value={this.state.nomeArtista}
                            onChange={this.onChangeArtista} />
                        <PerguntaInfo
                            placeholder="Link da musica"
                            value={this.state.urlLink}
                            onChange={this.onChangeUrl} />
                        <BotaoInfo onClick={this.addMusica}>Enviar</BotaoInfo>
                    </div>
                    : null}
                            </ConteinerGrade>
            </div>
        )
    }
}
export default Playlist