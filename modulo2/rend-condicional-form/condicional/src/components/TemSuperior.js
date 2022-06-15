import React from 'react';
import styled from 'styled-components';

const ConteinerPai = styled.div`
`
const Titulo = styled.h2`
`
class TemSuperior extends React.Component {
    render() {
        return (
            <ConteinerPai>
<Titulo>5. Por que você não terminou um curso de graduação?</Titulo>
<input placeholder='Curso'/>
<Titulo>6. Você fez algum curso complementar?</Titulo>
<input placeholder='Unidade'/>
            </ConteinerPai>
        )
    }
}

export default TemSuperior;