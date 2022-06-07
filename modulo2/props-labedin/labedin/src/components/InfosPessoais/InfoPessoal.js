import React from 'react';
import { Conteiner, Paragrafo,Imagem, Paragrafo2, } from './InfoPessoalstyled.js'

function PersonalInfo(props) {
    return (
        <Conteiner>
            <Imagem src={ props.imagem }/>
            <Paragrafo><b>{ props.texto }</b></Paragrafo>
            <Paragrafo2>{props.texto2 } </Paragrafo2>
        </Conteiner>

    )
}

export default PersonalInfo;