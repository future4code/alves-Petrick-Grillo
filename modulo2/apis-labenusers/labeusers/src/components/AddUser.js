import axios from "axios";
import React from "react";

class AddUser extends React.Component {
    state = {
      nomeUser: "",
      emailUser: "",
    };
    criarUser = () => {
      const bodyUser = {
        name: this.state.nomeUser,
        email: this.state.emailUser,
      };
  
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", bodyUser, {
        headers: {
          Authorization: "Petrick-Alves"
        }
      }
      ).then((resposta) => {
        alert("Concluido!", resposta)
      }).catch((erro) => {
        alert("Tente novamente, por favor.", erro)
        console.log(erro.response.data.message)
      })
    };
  
    onChangeUsuario = (event) => {
      this.setState({ nomeUser: event.target.value })
    }
  
    onChangeEmail = (event) => {
      this.setState({ emailUser: event.target.value })
    }
  
    render() {
  
      return (
        <div>
          <input
            placeholder="Seu nome"
            value={this.state.nomeUser}
            onChange={this.onChangeUsuario}
          />
          <input
            placeholder="Seu e-mail"
            value={this.state.emailUser}
            onChange={this.onChangeEmail}
          />
          <button onClick={this.criarUser}>Enviar</button>
          <div>
          </div>
        </div>
  
      );
    }
  }
  
  
  export default AddUser;