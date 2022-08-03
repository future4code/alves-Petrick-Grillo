import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData";
import GlobalContext from "../../Global/GlobalContext";
import useForm from "../../hooks/useForm";
import axios from "axios";
import iconcomentario from "../../img/iconcomentario.png"
import SetaBaixo from "../../img/SetaBaixo.png"
import SetaCima from "../../img/SetaCima.png"
import SetaBaixoVermelha from "../../img/SetaBaixoVermelha.png"
import SetaCimaVerde from "../../img/SetaCimaVerde.png"
import Linha from "../../img/Linha.png"
import { ContainerGif, InputTitulo, Line, MainContainer, Input, ContainerInteracao, Form, MainContainerInteracaoUsuario, MainContainerMap, ContainerUsuario, ContainerBody, MainContainerInteracao, ContainerBotaoInteracao, ContainerNumeroComentario, ContainerComentarioNumero, ContainerComentario, BotaoComentario, BotaoSeta, BotaoSetaBaixo, BotaoBody, Botao } from "./styled"

function ListaPost() {
    useProtectedPage()
    const { form, onChange } = useForm({ title: "", body: "" })
    const { setPost, mode, colorTeste } = useContext(GlobalContext)
    const [refresh, setRefresh] = useState(false)
    const posts = useRequestData([], `${BASE_URL}/posts`, refresh)
    const navigate = useNavigate()

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setRefresh(!refresh)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    const votePost = (id) => {
        const body = {
            direction: 1
        }
        axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setRefresh(!refresh)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    const unVotePost = (id) => {
        const body = {
            direction: -1
        }
        axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setRefresh(!refresh)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    const delVotePost = (id) => {
        axios.delete(`${BASE_URL}/posts/${id}/votes`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    const goToDetal = (id) => {
        navigate(`/DetalhePost/${id}`)
    }
    const onClickCard = (id) => {
        setPost(posts)
        goToDetal(id)
    }

    let setaPositivo
    let setaNegativo
    let postChangeCorNegativo
    let postChangeCorPositivo
    const renderizarPost = posts && posts.map((post) => {
        if (post.userVote >= 1) {
            setaPositivo = <img src={SetaCimaVerde} width={14} />
        } else {
            setaPositivo = <img src={SetaCima} width={14} />
        }

        if (post.userVote < 0) {
            setaNegativo = <img src={SetaBaixoVermelha} width={14} />
        } else {
            setaNegativo = <img src={SetaBaixo} width={14} />
        }

        if (post.userVote < 0) {
            postChangeCorNegativo = () => delVotePost(post.id)
        } else {
            postChangeCorNegativo = () => unVotePost(post.id)
        }

        if (post.userVote >= 1) {
            postChangeCorPositivo = () => delVotePost(post.id)
        } else {
            postChangeCorPositivo = () => votePost(post.id)
        }
        return <MainContainerMap key={post.id}>
            <BotaoBody onClick={() => onClickCard(post.id)}>
                <ContainerUsuario>
                    <h6>Enviado por: {post.username}</h6>
                </ContainerUsuario>
                <ContainerBody>
                    <h4>{post.body}</h4>
                </ContainerBody>
            </BotaoBody>
            <MainContainerInteracao>
                <ContainerBotaoInteracao>
                    <BotaoSeta onClick={postChangeCorPositivo}>{setaPositivo}</BotaoSeta>
                    {post.voteSum === 0 ? 0 : post.voteSum}
                    <BotaoSetaBaixo onClick={postChangeCorNegativo}>{setaNegativo}</BotaoSetaBaixo>
                </ContainerBotaoInteracao>
                <ContainerNumeroComentario>
                    <ContainerComentario>
                        <BotaoComentario onClick={() => onClickCard(post.id)}><img src={iconcomentario} width={20} />
                        </BotaoComentario>
                    </ContainerComentario>
                    <ContainerComentarioNumero>
                        {post.commentCount >= 1 ? post.commentCount : 0}
                    </ContainerComentarioNumero>
                </ContainerNumeroComentario>
            </MainContainerInteracao>
        </MainContainerMap>
    })
    const onSubmitPost = (event) => {
        event.preventDefault()
        createPost()
    }

    return (
        <MainContainer backColor={colorTeste}>
            <MainContainerInteracaoUsuario>
                <ContainerInteracao>
                    <Form>
                        <InputTitulo
                            name="title"
                            value={form.title}
                            onChange={onChange}
                            required
                            placeholder="Titulo"
                        />
                        <Input
                            name={"body"}
                            value={form.body}
                            onChange={onChange}
                            required
                            placeholder="Escreva seu post..."
                        />
                        <Botao onClick={onSubmitPost}>Postar</Botao>
                    </Form>
                </ContainerInteracao>
            </MainContainerInteracaoUsuario>
            <div>
                <Line src={Linha} />
            </div>
            <div>
                {posts.length > 1 ?
                    renderizarPost :
                    <ContainerGif>
                        <img src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif" width={200} />
                    </ContainerGif>
                }
            </div>
        </MainContainer >
    )
}

export default ListaPost;