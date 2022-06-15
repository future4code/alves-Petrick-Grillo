import React from 'react';
import styled from 'styled-components';

const ConteinerPai = styled.div`
`
const Nome = styled.input`
`
const Idade = styled.input`
`
const Email = styled.input`
`
const Titulo = styled.h2`
`
const Opçao = styled.select`
`


class DadosG extends React.Component {
    render() {
        return (
            <ConteinerPai>
                <Titulo>1.Qual o seu nome?</Titulo>
                <Nome placeholder='Seu nome'/>
                <Titulo>2. Qual sua idade?</Titulo>
                <Idade placeholder='Sua idade'/>
                <Titulo>Qual seu email?</Titulo>
                <Email placeholder='Seu e-mail'/>
                <Titulo>Qual a sua escolaridade?</Titulo>
                <Opçao onChange={(e) => this.props.ConferirEnsino(e.target.value)}>
                    <option value="EMI">Ensino Medio Incompleto</option>
                    <option value="EMC">Ensino Medio Completo</option>
                    <option value="ESI">Ensino Superior Incompleto</option>
                    <option value="ESC">Ensino Superior Completo</option>
                </Opçao>
            </ConteinerPai>
        )
    }
}

export default DadosG;