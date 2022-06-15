import React from 'react';
import './styles.css'
import styled from 'styled-components';
import DadosG from './components/DadosG';
import PergEnsino from './components/PergEnsino';
import TemSuperior from './components/TemSuperior';
import Final from './components/Final';

const MainConteiner = styled.div`
display:flex;
flex-direction:column;
height:100vh;
align-items:center;
`
const BotaoE = styled.button`

`
class App extends React.Component {
  state = {
    tela: "",
    etapa: 1,
    estadoEnsino:"EMI",
  }
  
  ConferirEnsino = (event) => {
    console.log(event)
    this.setState({ estadoEnsino: event});
  }
  
  renderizaEtapa = (etapa) => {
    const ensino = this.state.estadoEnsino
    if (etapa === 1) {
      return <DadosG ConferirEnsino={this.ConferirEnsino} />
    } else if (etapa === 2 && ensino == "EMI" ) {
      return <TemSuperior />
    } else if (etapa === 2 && ensino == "EMC" || ensino == "ESI" || ensino == "ESC" ) {
      return <PergEnsino />
    } else {
      <Final/>
    }
  }
  
  render() {
    console.log(this.state)
    return (
      <MainConteiner>
        {this.renderizaEtapa(this.state.etapa)}
        <BotaoE onClick={() => this.setState({ etapa: this.state.etapa + 1 })}>Proxima etapa</BotaoE>


      </MainConteiner>
    );
  }
}

export default App;
