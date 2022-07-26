import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData";
import styled from "styled-components";
import GlobalContext from "../../Global/GlobalContext";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { clear } from "@testing-library/user-event/dist/clear";
import iconcomentario from "../../img/iconcomentario.png"
import SetaBaixo from "../../img/SetaBaixo.png"
import SetaCima from "../../img/SetaCima.png"
import Linha from "../../img/Linha.png"


const MainContainer = styled.div`
width:100%;
`
const Input = styled.input`
height: 17vh;
margin-bottom:1%;
width: 100%;
border-radius: 12px;
background:#EDEDED;
border-color:none;
border:none;
font-family: 'Noto Sans', sans-serif;
vertical-align:text-top;
`
const Container1 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:90%;
margin:3%;
`
const Form = styled.form`
width:100%;
height:100%;
align-items:center;
display:flex;
flex-direction:column;
justify-content:center;
`
const Container3 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Container4 = styled.div`
background-color:#FBFBFB;
box-shadow: 0 0 0.1em #878787;
display:flex;
align-items:flex-start;
flex-direction:column;
justify-content:center;
margin:3%;
border-radius:9px;
`
const Container5 = styled.div`
color:grey;
align-items:left;
font-family: 'Noto Sans', sans-serif;
padding-left:1%;
`
const Container6 = styled.div`
padding:4% 0% 4% 1%;
font-family: 'Noto Sans', sans-serif;
`
const Container7 = styled.div`
display:flex;
`
const Container8 = styled.div`
margin-left:2%;
margin-bottom:2%;
padding-left:4%;
padding-right:4%;
width:15vw;
border:1px solid grey;
border-radius:10px;
display:flex;
justify-content:space-between;
`
const Container9 = styled.div`
margin-bottom:2%;
display:flex;
justify-content:space-between;
width:13vw;
border:1px solid grey;
border-radius:10px;
margin-left:4%;
`
const Container10 = styled.div`
margin-left:5%;
`
const Container11 = styled.div`
margin-right:5%;
`
const BotaoComentario = styled.button`
align-items:center;
display:flex;
justify-content:center;
background:none;
border:none;
margin-left:4%;
`
const BotaoSeta = styled.button`
background:none;
border:none;
`
const BotaoTeste = styled.button`
border:none;
background:none;
width:100%;
text-align:left;
`
const Botao = styled.button`
height: 47px;
border:none;
width: 359px;
left: 33px;
top: 267px;
border-radius: 12px;
padding: 12px, 145px, 12px, 145px;
background-color: #ff6489;
background-image: linear-gradient(160deg, #ff6489 0%, #f9b24e 100%);
font-size: 100%;
font-weight: 700;
color:white;
text-align: center;
margin-top:1.5%;
`
const Line = styled.img`
width:0.1%;
@media (min-width : 320px) and (max-width : 480px) {
    width:100%;
}
`
const InputTitulo = styled.input`
border-radius: 3px;
background:#EDEDED;
border-color:none;
border:none;
margin-bottom:2%;
padding:1%;
font-family: 'Noto Sans', sans-serif;
`
function ListaPost() {
    useProtectedPage()
    const { form, onChange } = useForm({ title: "", body: "" })
    const { setPost } = useContext(GlobalContext)
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log(posts)
    const navigate = useNavigate()

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            alert(resposta.data)
            clear()
        }).catch((erro) => {
            alert("Falha ao enviar, tente novamente")
            console.log(erro.message)
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
            console.log(resposta.data)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    useEffect(() => {

    },[posts])
    const unVotePost = (id) => {
        const body = {
            direction: -1
        }
        axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            console.log(resposta.data)
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
    const renderizarPost = posts && posts.map((post) => {
        return <Container4 key={post.id}>
            <BotaoTeste onClick={() => onClickCard(post.id)}>
                <Container5>
                    <h6>Enviado por: {post.username}</h6>
                </Container5>
                <Container6>
                    <h4>{post.body}</h4>
                </Container6>
            </BotaoTeste >
            <Container7>
                <Container8>
                    <BotaoSeta onClick={() => votePost(post.id)}><img src={SetaCima} width={14} /></BotaoSeta>
                    {post.voteSum}
                    <BotaoSeta onClick={() => unVotePost(post.id)}><img src={SetaBaixo} width={14} /></BotaoSeta>
                </Container8>
                <Container9>
                    <Container10>
                        {post.commentCount >= 1 ? post.commentCount : 0}
                    </Container10>
                    <Container11>
                        <BotaoComentario onClick={console.log}><img src={iconcomentario} width={20} />
                        </BotaoComentario>
                    </Container11>
                </Container9>
            </Container7>
        </Container4>
    })
    const onSubmitPost = (event) => {
        event.preventDefault()
        createPost()
    }

    return (
        <MainContainer>
            <Container3>
                <Container1>
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
                </Container1>
            </Container3>
            <div>
                <Line src={Linha} />
            </div>
            <div>
                {renderizarPost}
            </div>
        </MainContainer>
    )
}

export default ListaPost;