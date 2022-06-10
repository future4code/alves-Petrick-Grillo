import React from 'react';
import {Conteiner,CardGrandeImg,TituloCard,ConteinerDiv,Frase} from './CardGrandestyled.js'

function CardGrande(props) {
    return (
        <Conteiner>
            <CardGrandeImg src={ props.imagem } />
            <ConteinerDiv>
                <TituloCard>{ props.nome }</TituloCard>
                <Frase>{ props.descricao }</Frase>
            </ConteinerDiv>
        </Conteiner>
    )
}

export default CardGrande;