import axios from "axios";
import React from "react";
import ListaUser from "./components/ListaUser"
import AddUser from "./components/AddUser";



class App extends React.Component {
state={
  trocarTela:true
}
onChangeClick = () => {
  this.setState({trocarTela: !this.state.trocarTela })
}
render() {
    return (
      <div>{
        this.state.trocarTela ? <AddUser/> :
        <ListaUser/>
        }
            <button onClick={this.onChangeClick}>Trocar Tela</button>
      </div>

    );
  }
}


export default App;
