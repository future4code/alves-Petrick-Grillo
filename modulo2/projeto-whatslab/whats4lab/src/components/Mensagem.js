import React from 'react'
import styled from 'styled-components'

const ConteinerMensagem = styled.div`
display:flex;
border: 1px solid white;
background-color:white;
margin:10px 10px 10px 10px;
`
const MensagensEnviadas = styled.div`
  width:100%;
  height:100%;
  margin-bottom: 0.5%;
  padding-top:0.6%;
  padding-bottom:0.5%;
  margin-top:0.5%;
  padding-left:2%;
`

class Mensagem extends React.Component {

    render() {
        return(
      <div>
            <ConteinerMensagem>
        <MensagensEnviadas>
          <p>
          {this.props.nomeUser}: {this.props.MsgUser}
          </p>
        </MensagensEnviadas>
      </ConteinerMensagem>

      </div>
      );
    }
}

export default Mensagem