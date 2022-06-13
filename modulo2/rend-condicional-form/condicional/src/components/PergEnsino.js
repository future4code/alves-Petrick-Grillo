import React from 'react';
import styled from 'styled-components';

const ConteinerPai = styled.div`
`
const Titulo = styled.h2`
`
class PergEnsino extends React.Component {
    render() {
        return (
            <ConteinerPai>
                <Titulo>INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>
                <Titulo>5. Qual curso?</Titulo>
                <input placeholder='Curso' />
                <Titulo>6. Qual a unidade de ensino?</Titulo>
                <input placeholder='Unidade' />
            </ConteinerPai>
        )
    }
}

export default PergEnsino;