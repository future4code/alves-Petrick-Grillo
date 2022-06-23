import React from "react";
import ListaUser from "./components/ListaUser"
import AddUser from "./components/AddUser";
import DetalheUser from "./components/DatalheUser";


class App extends React.Component {
  state = {
    trocarTela: "AddUser"
  }

  escolherTela = () => {
    switch (this.state.trocarTela) {
      case "AddUser":
        return <AddUser irParaAdd={this.irParaLista}/>
      case "lista":
        return <ListaUser irParaLista={this.irParaAdd} irParaDetalhe={this.irParaDetalhe} />
      case "DetalheUser":
        return <DetalheUser irParaLista={this.irParaAdd}/>
      default:
        return <AddUser />
    }
  }

  irParaAdd = () => {
    this.setState({trocarTela: "AddUser"})
    console.log("aaaa")
  }
  irParaLista = () =>{
    this.setState({trocarTela:"lista"})
  }
  irParaDetalhe = () =>{
    this.setState({trocarTela:"DetalheUser"})
  }

  render() {
    return (
      <div>
        {this.escolherTela()}
      </div>

    );
  }
}


export default App;
