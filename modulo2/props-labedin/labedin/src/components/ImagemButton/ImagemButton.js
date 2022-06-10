import React from 'react';
import {ConteinerBotao,BotaoImg} from './ImagemButtonstyled.js'

function ImagemButton(props) {
    return (
        <ConteinerBotao>
            <BotaoImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ConteinerBotao>

    )
}

export default ImagemButton;