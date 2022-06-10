import React from 'react'
import styled from 'styled-components'

const ConteinerMensagem = styled.div`
display:flex;
height: 800px;
`
const MensagensEnviadas = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const FooterMensagem = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
`

class Mensagem extends React.Component {

    render() {
        return(
      <div>
            <ConteinerMensagem>
        <MensagensEnviadas>
        </MensagensEnviadas>
      </ConteinerMensagem>
      <FooterMensagem>
        </FooterMensagem>

      </div>
      );
    }
}

export default Mensagem