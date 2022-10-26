import moment from "moment/moment"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL_IMG } from "../../constants/urls"
import GlobalContext from "../../Global/GlobalContext"
import { ButtonGenres, Card, Container1, Container2, Container3, Container4, Container5, ContainerCard, ContainerCardMap, ContainerFilter, ContainerGenres, ContainerTitle, ImageMovie, MainCard, MainContainer, MainContainerGenres, MainContainerTitle, TitleMovie, TXTTitle } from "./StyledPopularMovies"

export function PopularMovies() {
    const { popularFilmes, genresMovies, setPage, addMovie } = useContext(GlobalContext)
    const [idGenre, setIdGenre] = useState("")
    const navigate = useNavigate()
    const goToDetail = () => {
        navigate("/details")
    }
    const filmes = popularFilmes?.results
    const genres = genresMovies?.genres
    const renderGenre = (idGenre) => {
        const arrayFilter = []
        filmes?.forEach((movie) => {
            if (movie?.genre_ids.includes(idGenre)) {
                arrayFilter.push(movie)
            }
        })
        return arrayFilter.length ? arrayFilter : filmes
    }
    const onChangeGenre = (genre) => {
        setIdGenre(genre)
    }
    const onChangeDetail = (id) => {
        addMovie(id)
        goToDetail()
    }
    useEffect(() => {
        renderGenre(idGenre)
    }, [idGenre])
    const renderGenres = genres?.map((generos) => {
        return <ContainerGenres key={generos?.id}>
            <ButtonGenres onClick={() => onChangeGenre(generos?.id)}>
                {generos?.name}
            </ButtonGenres>
        </ContainerGenres>
    })
    const renderMovies = renderGenre(idGenre)?.map((movie) => {
        const dataFormated = moment(movie.release_date).format('ll')
        return <ContainerCardMap key={movie?.id}>
            <MainCard>
                <Card onClick={() => onChangeDetail(movie.id)}>
                    <ImageMovie src={`${BASE_URL_IMG}${movie?.backdrop_path}`} alt={movie?.title} />
                    <Container5>
                        <TitleMovie>
                            {movie?.title}
                        </TitleMovie>
                    </Container5>
                    <Container4>{dataFormated}</Container4>
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
                <Container2>
                    <ContainerFilter>
                        Filtre Por:
                    </ContainerFilter>
                    <MainContainerGenres>
                        <Container1>
                            {renderGenres}
                        </Container1>
                    </MainContainerGenres>
                </Container2>
            </MainContainerTitle>
            <ContainerCard id="cardPai">
                <Container3 id="Container3">
                    {renderMovies}
                </Container3>
            </ContainerCard>
        </MainContainer >
    )
}