import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls";
import GlobalContext from "../../Global/GlobalContext";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData";
import SetaBaixo from "../../img/SetaBaixo.png"
import SetaCima from "../../img/SetaCima.png"
import SetaBaixoVermelha from "../../img/SetaBaixoVermelha.png"
import SetaCimaVerde from "../../img/SetaCimaVerde.png"
import iconcomentario from "../../img/iconcomentario.png"
import { ContainerBotaoInteracao, ContainerNumeroComentario, BotaoSeta, BotaoSetaBaixo, ImgSetaCima, MainContainerMap, ContainerUsuario, ContainerBody, MainContainer, ContainerComentario, Input, Form, BotaoRes, MainContainerInteracao } from "./styled"

function DetalhePost() {
    useProtectedPage()
    const params = useParams()
    const { post, colorTeste, setPost } = useContext(GlobalContext)
    const navigate = useNavigate()
    const { form, onChange } = useForm({ body: "" })
    const [result, setResult] = useState()
    const [refresh, setRefresh] = useState(false)
    const posts = useRequestData([], `${BASE_URL}/posts`, refresh)
    const comentarios = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`, refresh)

    const createComment = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setRefresh(!refresh)
        }).catch((erro) => {
            alert("Falha ao enviar, tente novamente")
            console.log(erro.response)
        })
    }

    const votePost = (id) => {
        const body = {
            direction: 1
        }
        axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setPost(posts)
            setRefresh(!refresh)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }

    const unVotePost = (id) => {
        const body = {
            direction: -1
        }
        axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setPost(posts)
            setRefresh(!refresh)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }

    const delVotePost = (id) => {
        axios.delete(`${BASE_URL}/comments/${id}/votes`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setRefresh(!refresh)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    const mainVotePost = (id) => {
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
    const mainUnVotePost = (id) => {
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
    let setaPositivo
    let setaNegativo
    let postChangeCorNegativo
    let postChangeCorPositivo
    const renderPostMain = posts && posts.map((post) => {
        if (params.id === post.id) {
            if (post.userVote >= 1) {
                setaPositivo = <img src={SetaCimaVerde} width={14} />
            } else {
                setaPositivo = <ImgSetaCima src={SetaCima} width={14} />
            }

            if (post.userVote < 0) {
                setaNegativo = <img src={SetaBaixoVermelha} width={14} />
            } else {
                setaNegativo = <img src={SetaBaixo} width={14} />
            }

            if (post.userVote < 0) {
                postChangeCorNegativo = () => delVotePost(post.id)
            } else {
                postChangeCorNegativo = () => mainUnVotePost(post.id)
            }

            if (post.userVote >= 1) {
                postChangeCorPositivo = () => delVotePost(post.id)
            } else {
                postChangeCorPositivo = () => mainVotePost(post.id)
            }
            return <MainContainerMap key={post.id}>
                <ContainerUsuario>
                    <h6>Enviado PorA: {post?.username}</h6>
                </ContainerUsuario>
                <ContainerBody>
                    {post?.body}
                </ContainerBody>
                <MainContainerInteracao>
                    <ContainerBotaoInteracao>
                        <BotaoSeta onClick={postChangeCorPositivo}>{setaPositivo}</BotaoSeta>
                        {post?.userVote}
                        <BotaoSetaBaixo onClick={postChangeCorNegativo}>{setaNegativo}</BotaoSetaBaixo>
                    </ContainerBotaoInteracao>
                    <ContainerNumeroComentario>
                        {post?.commentCount}<img src={iconcomentario} width={20} />
                    </ContainerNumeroComentario>
                </MainContainerInteracao>
            </MainContainerMap>
        }
    })
    const renderizarComentario = comentarios && comentarios.map((comentario) => {

        if (comentario.userVote >= 1) {
            setaPositivo = <img src={SetaCimaVerde} width={14} />
        } else {
            setaPositivo = <ImgSetaCima src={SetaCima} width={14} />
        }

        if (comentario.userVote < 0) {
            setaNegativo = <img src={SetaBaixoVermelha} width={14} />
        } else {
            setaNegativo = <img src={SetaBaixo} width={14} />
        }

        if (comentario.userVote < 0) {
            postChangeCorNegativo = () => delVotePost(comentario.id)
        } else {
            postChangeCorNegativo = () => unVotePost(comentario.id)
        }

        if (comentario.userVote >= 1) {
            postChangeCorPositivo = () => delVotePost(comentario.id)
        } else {
            postChangeCorPositivo = () => votePost(comentario.id)
        }

        return <MainContainerMap key={comentario.id}>
            <MainContainer>
                <ContainerUsuario>
                    <h6>Enviado por: {comentario.username}</h6>
                </ContainerUsuario>
                <ContainerBody>
                    {comentario.body}
                </ContainerBody>
            </MainContainer>
            <ContainerBotaoInteracao>
                <BotaoSeta onClick={postChangeCorPositivo}>{setaPositivo}</BotaoSeta>
                {comentario.voteSum}
                <BotaoSetaBaixo onClick={postChangeCorNegativo}>{setaNegativo}</BotaoSetaBaixo>
            </ContainerBotaoInteracao>
        </MainContainerMap>
    })
    return (
        <MainContainer backColor={colorTeste}>
            <div>
                {renderPostMain}
            </div>
            <ContainerComentario>
                <Form onSubmit={createComment}>
                    <Input
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        required
                        placeholder="Escreva seu comentário..."
                    />
                    <BotaoRes type="submit">Responder</BotaoRes>
                </Form>
            </ContainerComentario>
            <div>
                {renderizarComentario}
            </div>
        </MainContainer>
    )
}

export default DetalhePost;