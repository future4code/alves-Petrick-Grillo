import moment from "moment/moment"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL_IMG } from "../../constants/urls"
import GlobalContext from "../../Global/GlobalContext"
import { ButtonGenres, Card, ContainerGenresWrap, BlockFilter, CardWrap, DataFormatada, MainTitleMovie, ContainerCard, ContainerCardMap, ContainerFilter, ContainerGenres, ContainerTitle, ImageMovie, MainCard, MainContainer, MainContainerGenres, MainContainerTitle, TitleMovie, TXTTitle } from "./StyledPopularMovies"

export function PopularMovies() {
    const { popularFilmes, genresMovies, addMovie } = useContext(GlobalContext)
    const [idGenre, setIdGenre] = useState("")
    const filmes = popularFilmes?.results
    const genres = genresMovies?.genres
    const navigate = useNavigate()
    const goToDetail = () => {
        navigate("/details")
    }
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
        const backColor = {
            28: '#D18000',
            12: '#D18000',
            16: '#D18000',
            35: '#D18000',
            80: '#D18000',
            99: '#D18000',
            18: '#D18000',
            10751: '#D18000',
            14: '#D18000',
            36: '#D18000',
            27: '#D18000',
            10402: '#D18000',
            9648: '#D18000',
            10749: '#D18000',
            878: '#D18000',
            10770: '#D18000',
            53: '#D18000',
            10752: '#D18000',
            37: "#D18000"
        }[idGenre]
        console.log(generos)
        return <ContainerGenres key={generos?.id}>
            <ButtonGenres onClick={() => onChangeGenre(generos?.id)} backgroundColor={backColor}>
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
                    <MainTitleMovie>
                        <TitleMovie>
                            {movie?.title}
                        </TitleMovie>
                    </MainTitleMovie>
                    <DataFormatada>{dataFormated}</DataFormatada>
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
                <BlockFilter>
                    <ContainerFilter>
                        Filtre Por:
                    </ContainerFilter>
                    <MainContainerGenres>
                        <ContainerGenresWrap>
                            {renderGenres}
                        </ContainerGenresWrap>
                    </MainContainerGenres>
                </BlockFilter>
            </MainContainerTitle>
            <ContainerCard>
                <CardWrap>
                    {renderMovies}
                </CardWrap>
            </ContainerCard>
        </MainContainer >
    )
}