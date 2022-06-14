import React from 'react';
import './styles.css'
import styled from 'styled-components'
import Mensagem from './components/Mensagem';

const MainContainer = styled.div`
display:flex;
height:100vh;
  `
  const ConteinerMolduraTexto = styled.footer`
  display:flex;
  justify-content:center;
  `
const MolduraTexto = styled.footer`
display:flex;
`
const BotaoBaixo = styled.button`
  margin-top:3px;
  padding-left:20px;
  padding-right:20px;
  height:100%;
  
  `
const InputBaixoUser = styled.input`
  height:80%;
  margin-top:3px;
`
const InputBaixoMsg = styled.input`
  height:80%;
  margin-top:3px;
`
const ConteinerMsg = styled.div`
height:90%;
width:100%;
background-color:#E0B6AD;
border: 5vh solid black;
`
const FilhoMsg = styled.div`
display:flex;
flex-direction:column;
height:100%;
width:100%;
display:flex;
flex-wrap:wrap;
margin-top:2vh;
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
      MsgUser: this.state.valorInputMsgUsuario,
  }
  const addPessoas = [...this.state.infoUsuario, novaPessoa];
  this.setState({ infoUsuario: addPessoas })
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
          <ConteinerMsg>
              <FilhoMsg>
      {this.state.infoUsuario.map((pessoa) => {
        return (
          <Mensagem nomeUser={pessoa.nomeUser} MsgUser={pessoa.MsgUser}/>
          )
        })}
        </FilhoMsg>
      <ConteinerMolduraTexto>
        <MolduraTexto>
          <InputBaixoUser
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
            />
          <InputBaixoMsg
            value={this.state.valorInputMsgUsuario}
            onChange={this.onChangeInputMsgU}
            placeholder={"Mensagem"}
            />
          <BotaoBaixo onClick={this.adicionaMsgUsuario}>Enviar</BotaoBaixo>
          
        </MolduraTexto>
      </ConteinerMolduraTexto>
        </ConteinerMsg>
      </MainContainer>
  );
}
}

export default App;
