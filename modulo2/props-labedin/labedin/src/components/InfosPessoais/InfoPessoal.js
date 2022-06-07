import React from 'react';
import { Conteiner, Paragrafo,Imagem } from './InfoPessoalstyled.js'

function PersonalInfo(props) {
    return (
        <Conteiner>
            <Imagem src={ props.imagem }/>
            <Paragrafo><b>{ props.texto }</b></Paragrafo>
            <Paragrafo>{props.texto2 } </Paragrafo>
        </Conteiner>

    )
}

export default PersonalInfo;