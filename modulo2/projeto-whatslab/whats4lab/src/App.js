import React from 'react';
import './styles.css'
import styled from 'styled-components'
import Mensagem from './components/Mensagem';

const MainContainer = styled.div`
display:flex;
background-color:black;
height:100vh;
  `
const MolduraTexto = styled.div`
background-color:black;
`
const BotaoBaixo = styled.button`
  bottom: 0;
  position: fixed;
  padding-left:20px;
  padding-right:20px;
`
const InputBaixoUser = styled.input`
  bottom: 0;
  padding-left:202px;
  padding-right:220px;
`
const InputBaixoMsg = styled.input`
  bottom: 0;
  padding-left:202px;
  padding-right:220px;
`


class App extends React.Component {
  state = {
    infoUsuario: [],
    valorInputUsuario: "",
    valorInputMsgUsuario: "",
  };
  adicionaMsgUsuario = () => {
    const novaPessoa = {
      nomeUser: this.state.valorInputUsuario,
      fotoUser: this.state.valorInputMsgUsuario,
  }
  const addPessoas = [...this.state.infoUsuario, novaPessoa];
  this.setState({ infoUsuario: addPessoas })
  this.setState({ valorInputUsuario: ""});
  this.setState({ valorInputMsgUsuario: ""});
}

onChangeInputUsuario = (event) => {
  this.setState({ valorInputUsuario: event.target.value });
}
onChangeInputMsgU = (event) => {
  this.setState({ valorInputMsgUsuario: event.target.value });
}
render() {
  return (
    <MainContainer>
      <MolduraTexto>
        <div>
          <InputBaixoUser
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
            />
          <InputBaixoMsg
            value={this.state.valorInputMsgUsuario}
            onChange={this.onChangeInputMsgU}
            placeholder={"Foto de Usuario"}
            />
          <BotaoBaixo onClick={this.adicionaMsgUsuario}>Enviar</BotaoBaixo>
          
        </div>
      </MolduraTexto>
      {this.state.infoUsuario.map((pessoa) => {
          return (
            <Mensagem nomeUser={pessoa.nomeUser} fotoUsuario={pessoa.fotoUser}/>
          )
        })}
      </MainContainer>
  );
}
}

export default App;
