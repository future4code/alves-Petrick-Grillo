import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BASE_URL_IMG } from "../constants/urls"
import GlobalContext from "../Global/GlobalContext"

const MainContainer = styled.div`
height:100%;
width:100%;
/* display:flex; */
/* flex-wrap:wrap; */
`
const ContainerCard = styled.div`
display:flex;
flex-wrap:wrap;
width:30%;
/* height:80vh; */
`
const ContainerCardMap = styled.div`
/* height:100%; */
/* width:100%; */
/* display:flex; */
/* display:flex; */
/* flex-wrap:wrap; */
`
const MainCard = styled.div`
/* height:20%; */
/* width:30%; */
/* display:flex; */
/* flex-wrap:wrap; */
`
const Card = styled.div`
/* height:100%; */
/* width:100%; */
display:flex;
flex-direction:column;
border:black;
border-radius:10px;
border:solid;
margin:2%;
padding:1.5%;
`
const MainContainerTitle = styled.div`
height:30vh;
background-color:#2D0C5E;
display:flex;
flex-direction:column;
`
const ContainerTitle = styled.div`

`
const TXTTitle = styled.div`
color:white;
font-weight: 700;
font-size: 40px;
line-height: 56px;
text-align: center;
letter-spacing: -0.005em;
`
const MainContainerGenres = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100vw;
`
const ContainerGenres = styled.div`
margin:0.2%;
display:flex;
align-items:center;
justify-content:center;
width:100%;
`
const ButtonGenres = styled.button`
/* height: 40px; */
/* width: 76px; */
/* left: 617px; */
/* top: 329px; */
border-radius: 4px;
padding: 8px 16px 8px 16px;
width:4vw;
`
const ContainerFilter = styled.div`
color:white;
display:flex;
align-items:center;
justify-content:center;
`
export function PopularMovies() {
    const { popularFilmes, genresMovies, setPage } = useContext(GlobalContext)
    const [idGenre, setIdGenre] = useState("")
    console.log(popularFilmes?.results)
    console.log(genresMovies?.genres)
    const filmes = popularFilmes?.results
    const genres = genresMovies?.genres
    console.log(filmes?.genre_ids)
    const renderGenre = (idGenre) => {
        const arrayFilter = []
        filmes?.forEach((movie) => {
            if (movie?.genre_ids.includes(idGenre)) {
                arrayFilter.push(movie)
            }
        })
        return arrayFilter.length ? arrayFilter : filmes
    }
    console.log(renderGenre())
    const onChangeGenre = (genre) => {
        setIdGenre(genre)
    }
    useEffect(() => {
        renderGenre(idGenre)
        console.log(renderGenre(idGenre))
    }, [idGenre])
    console.log(idGenre)
    const renderGenres = genres?.map((generos) => {
        return <ContainerGenres>
            <ButtonGenres onClick={() => onChangeGenre(generos?.id)}>
                {generos?.name}
            </ButtonGenres>
        </ContainerGenres>
    })
    const renderMovies = renderGenre(idGenre)?.map((movie) => {
        return <ContainerCardMap key={movie?.id}>
            <MainCard>
                <Card>
                    <h2>
                        {movie?.title}
                    </h2>
                    <h5>
                        {movie?.overview}
                    </h5>
                    <img src={`${BASE_URL_IMG}${movie?.backdrop_path}`} alt={movie?.title} />
                </Card>
            </MainCard>
        </ContainerCardMap>
    })
    return (
        <MainContainer>
            <MainContainerTitle>
                <ContainerTitle>
                    <TXTTitle>Milhões de filmes, séries e pessoas para descobrir. Explore já.</TXTTitle>
                </ContainerTitle>
                <ContainerFilter>
                    Filtre Por:
                </ContainerFilter>
                <MainContainerGenres>
                    {renderGenres}
                </MainContainerGenres>
            </MainContainerTitle>
            <ContainerCard id="cardPai">
                {renderMovies}
            </ContainerCard>
        </MainContainer>
    )
}