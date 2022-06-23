import axios from "axios";
import React from "react";
import styled from "styled-components";

const BotaoX = styled.button`
margin-left: 10px;
margin-bottom:20px;
`

class DetalheUser extends React.Component {
    state = {
        usuarios: [],
        emailUser: [],
    }
    componentDidMount() {
        this.mostrarNome()
    }
    componentDidUpdate() {
        // this.mostrarNome()
    }
    mostrarNome = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "Petrick-Alves"
            }
        }).then((resposta) => {
            this.setState({ usuarios: resposta.data })
        }).catch((erro) => {
            alert(erro.response.data)
        })
    };

    infoUser = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "Petrick-Alves"
            }
        }).then((resposta) => {
            this.setState({ emailUser: resposta.data })
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    };

    onChangeEmail = () => {
        this.setState({ emailUser: this.renderizarEmail })
      }
    render() {
        const renderizarNomes = this.state.usuarios.map((usuario) => {
            const renderizarEmail = <p> Usuario:{this.state.emailUser.name}<br/> Email:{this.state.emailUser.email}</p>
            return <>
                <p>{usuario.name}
                </p>
                {this.state.emailUser.id === usuario.id && renderizarEmail}
                <BotaoX onClick={() => this.infoUser(usuario.id)}>Ver informações</BotaoX>
            </>
        });
        
        // console.log(this.state.emailUser)

        return (
            <div>
                <button onClick={this.props.irParaLista}>Voltar para Cadastro</button>
                {renderizarNomes}
            </div>
        );
    }
}

export default DetalheUser