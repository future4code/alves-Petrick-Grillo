import axios from "axios";
import React from "react";
import styled from "styled-components";

const Botao = styled.button`
margin-left: 10px;
margin-top:30px;
`
const BotaoX = styled.button`
margin-left: 10px;
margin-bottom:20px;
`

class listaUser extends React.Component {
  state = {
    usuarios: [],
  }
  componentDidMount() {
    this.mostrarNome()
  }
  componentDidUpdate() {
    this.mostrarNome()
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

  deletarUser = (id) => {
    const confirmar = window.confirm("Tem certeza?")
    if(confirmar === true){
axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
  headers: {
    Authorization: "Petrick-Alves"
  }
}).then (()=>{
}).catch((erro)=>{
  console.log(erro.data)
})
    }
  };
  
  render() {

    const renderizarNomes = this.state.usuarios.map((usuario) => {
      return <>
        <p>{usuario.name}
        </p>
        <BotaoX onClick={() => this.deletarUser(usuario.id)}>Retirar Usuario</BotaoX>
      </>
    });
    return (
      <div>
        <button onClick={this.props.irParaLista}>Voltar para Cadastro</button>
        <button onClick={this.props.irParaDetalhe}>Detalhes do usuario</button>
        {renderizarNomes}
      </div>
    );
  }
}


export default listaUser;