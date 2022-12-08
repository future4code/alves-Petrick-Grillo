import moment from "moment/moment";
import { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../Global/GlobalContext";


const MainContainer = styled.div`
height:100%;
width:100%;
display:flex;
`
const ContainerPadding = styled.div`
padding-left:2%;
width:40%;
height:100%;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    position: absolute;
  top: 41%;
  width: 100%;
  text-align: center;
  font-size: 15px;
}
`
const ContainerTXTCaixa = styled.div`
width: 60%;
height: 100%;
`
const ContainerTXTCaixaMB = styled.div`

display:flex;
text-align:center;
justify-content:center;
padding-top:9%;
`
const TXTData = styled.h2`
color:white;
`
export function DataSena() {
    const { concurso } = useContext(GlobalContext)
    const DataGlobal = concurso.data
    const idConcurso = concurso.id
    const dataFormatada = moment(DataGlobal).format("DD-MM-YYYY")
    const largura = window.screen.width
    console.log(largura)
    return (
        <MainContainer>
            {largura >= 480 ?
                <ContainerPadding>
                    <div>
                        <TXTData>Concurso</TXTData>
                    </div>
                    <div>

                        <TXTData>

                            {idConcurso}{" - "}{dataFormatada}
                        </TXTData>
                    </div>
                </ContainerPadding>
                : <ContainerPadding>
                    <TXTData>Concurso Nº{idConcurso}</TXTData>
                </ContainerPadding>
            }
            {largura >= 480 ?
                <ContainerTXTCaixa>
                    <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </ContainerTXTCaixa>
                : <ContainerTXTCaixaMB>
                    <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </ContainerTXTCaixaMB>}
        </MainContainer>
    )
}