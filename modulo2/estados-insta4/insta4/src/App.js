import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `
// class Exercicio extends React.Componente{}
class App extends React.Component {
  state = {
    infoUsuario: [],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };
  adicionaUsuario = () => {
    const novaPessoa = {
      nomeUser: this.state.valorInputUsuario,
      fotoUser: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const addPessoas = [...this.state.infoUsuario, novaPessoa];
    this.setState({ infoUsuario: addPessoas })
    this.setState({ valorInputUsuario: ""});
    this.setState({ valorInputFotoUsuario: ""});
    this.setState({ valorInputFotoPost: ""});
  }
  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  }
  onChangeInputFotoU = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  }
  onChangeInputFotoP = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  }
  render() {
    console.log(this.state.infoUsuario)
    return (
      <MainContainer>
        <div>
          <div>
            <input
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Nome"}
            />
            <input
              value={this.state.valorInputFotoU}
              onChange={this.onChangeInputFotoU}
              placeholder={"Foto de Usuario"}
            />
            <input
              value={this.state.valorInputFotoP}
              onChange={this.onChangeInputFotoP}
              placeholder={"Foto que deseja adicionar"}
            />
            <button onClick={this.adicionaUsuario}>Adicionar</button>
          </div>
        </div>
        {this.state.infoUsuario.map((pessoa) => {
          if(pessoa.length){

          }
          return (
            <Post nomeUsuario={pessoa.nomeUser} fotoUsuario={pessoa.fotoUser} fotoPost={pessoa.fotoPost} />
          )
        })}
      </MainContainer>

    );
  }
}

export default App;
