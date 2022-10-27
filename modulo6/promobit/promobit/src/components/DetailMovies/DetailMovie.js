import axios from "axios"
import moment from "moment"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL, BASE_URL_IMG, KEY_API } from "../../constants/urls"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const MainContainer = styled.div`
height: 100%;
width:100%;
`
export const MainContainerBackground = styled.div`
height:45vh;
background-color:#2D0C5E;
/* display:flex;
flex-direction:column; */
`
export const Container1 = styled.div`
width:100%;
`
export const Container2 = styled.div`
/* padding-top:5%;
padding-left:6%;
display:flex; */
`
export const Container3 = styled.div`
padding-left:2%;
`
export const Container4 = styled.div`
font-family: Roboto;
font-size: 32px;
font-weight: 700;
line-height: 38px;
letter-spacing: -0.005em;
text-align: left;
color:white;
`
export const Container5 = styled.div`
padding-top:3%;
padding-left:6%;
display:flex;
/* flex-direction:column; */
`
export const Container6 = styled.div`
padding-top:1%;
padding-left:6%;
`
export const Container7 = styled.div`
`
export const Container8 = styled.div`
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:white;
display:flex;
`
export const Container9 = styled.div`
margin-left:4px;
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:white;
display:flex;
`
export const Container10 = styled.div`
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.005em;
text-align: left;
color:white;
width:60%;
padding-top:1%;
`
export const TXTSinopse = styled.div`
font-family: Roboto;
font-size: 20px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:white;
padding-top:1%;
`
export const Progress = styled.div`
width:100px;
height:100px;
`
export const IMGPoster = styled.img`
height: 574px;
width: 383px;
left: 112px;
top: 128px;
box-shadow:2px 2px 2px black;
border-radius: 8px;
`
export function DetailMovie() {
    const [movieDetail, setMovieDetail] = useState([])
    console.log(movieDetail)
    const AnoFilme = movieDetail?.release_date || "Carregando"
    const dataBR = moment(AnoFilme).format("L")
    const Ano = AnoFilme?.split("-")
    const params = useParams()
    const addMovie = () => {
        axios.get(`${BASE_URL}${params.id}${KEY_API}`)
            .then((resposta) => {
                setMovieDetail(resposta.data)
            })
    }
    const generos = movieDetail?.genres?.map((generos) => {
        return <Container9>
            {generos.name}
        </Container9>
    })
    useEffect(() => {
        addMovie()
    }, [])
    const percentage = movieDetail?.vote_average * 10;
    return (
        <MainContainer>
            <MainContainerBackground>
                <Container1>
                    <Container2>
                        <Container5 id="key 5">
                            <IMGPoster src={`${BASE_URL_IMG}${movieDetail?.poster_path}`} />
                            <Container3 id="key 3">
                                <Container4>
                                    {movieDetail?.title}{` (${Ano[0]})`}
                                </Container4>
                                <Container8>
                                    {dataBR} - {generos}
                                </Container8>
                                <Progress>
                                    <CircularProgressbar styles={buildStyles({
                                        textColor: "green",
                                        pathColor: "green"
                                    })} value={percentage} text={`${percentage}%`} />;
                                </Progress>
                                <TXTSinopse>
                                    <h2>Sinopse:</h2>
                                </TXTSinopse>
                                <Container10>
                                    {movieDetail.overview}
                                </Container10>
                            </Container3>
                        </Container5>
                        <Container6>
                            <h1>Elenco original</h1>
                        </Container6>
                    </Container2>
                </Container1>
            </MainContainerBackground>
        </MainContainer>
    )
}