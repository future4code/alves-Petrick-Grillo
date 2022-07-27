import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls";
import GlobalContext from "../../Global/GlobalContext";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData";
import styled from "styled-components";
import SetaBaixo from "../../img/SetaBaixo.png"
import SetaCima from "../../img/SetaCima.png"
import iconcomentario from "../../img/iconcomentario.png"
import { Refresh } from "@mui/icons-material";

const Container8 = styled.div`
margin-left:2%;
margin-bottom:2%;
padding-left:2%;
padding-right:2%;
width:15vw;
border:0.1px solid grey;
border-radius:10px;
display:flex;
justify-content:space-between;
color:grey;
`
const ContainerTeste = styled.div`
margin-left:2%;
margin-bottom:2%;
padding-left:2%;
padding-right:2%;
width:15vw;
border:0.1px solid grey;
border-radius:10px;
display:flex;
justify-content:space-between;
color:grey;
`
const BotaoSeta = styled.button`
background:none;
border:none;
`
const BotaoSetaBaixo = styled.button`
background:none;
border:none;
padding-top:6%;
`
const ImgSetaCima = styled.img`
`
const Container1 = styled.div`
background-color:#FBFBFB;
box-shadow: 0 0 0.1em #878787;
display:flex;
align-items:flex-start;
flex-direction:column;
justify-content:center;
margin:3%;
border-radius:9px;
`
const Container2 = styled.div`
color:grey;
align-items:left;
font-family: 'Noto Sans', sans-serif;
padding-left:4%;
padding-top:1%;
width:100%;
`
const Container3 = styled.div`
padding:4% 0% 4% 5%;
font-family: 'Noto Sans', sans-serif;
`
const Container4 = styled.div`
width:100%;
display:flex;
/* align-items:center; */
flex-direction:column;
background:${props => props.backColor};
/* justify-content:center; */
`
const Container5 = styled.div`
background-color:#FBFBFB;
box-shadow: 0 0 0.1em #878787;
display:flex;
align-items:flex-start;
flex-direction:column;
justify-content:center;
margin:3%;
border-radius:9px;
`
const Container6 = styled.div`
color:grey;
align-items:left;
font-family: 'Noto Sans', sans-serif;
padding-left:4%;
padding-top:1%;
`
const Container7 = styled.div`
padding:4% 0% 4% 5%;
font-family: 'Noto Sans', sans-serif;
`
const Container9 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
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
const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
width:95%;
`
const BotaoRes = styled.button`
height: 47px;
border:none;
/* width: 359px; */
left: 33px;
top: 267px;
border-radius: 12px;
/* padding: 12px, 145px, 12px, 145px; */
background-color: #ff6489;
background-image: linear-gradient(160deg, #ff6489 0%, #f9b24e 100%);
font-size: 100%;
font-weight: 700;
color:white;
text-align: center;
margin-top:1.5%;
`
const Container22 = styled.div`
display:flex;
width:100%;
`

function DetalhePost() {
    useProtectedPage()
    const params = useParams()
    const { post, colorTeste } = useContext(GlobalContext)
    const navigate = useNavigate()
    const { form, onChange } = useForm({ body: "" })
    const [refresh, setRefresh] = useState(false)
    const comentarios = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`, refresh)
    console.log(comentarios)

    useEffect(() => {
    }, [])

    const createComment = (event) => {
        event.preventDefault()
        console.log(form)
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setRefresh(!refresh)
            console.log(resposta.data)
        }).catch((erro) => {
            alert("Falha ao enviar, tente novamente")
            console.log(erro.response)
        })
    }
    const result = post.find(idpost => idpost.id === params.id)

    /* IF ELSE BOTAO COLORIDO*/
    if (result.userVote >= 1) {
        return
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
            setRefresh(!refresh)
            console.log(resposta.data)
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
            setRefresh(!refresh)
            console.log("un", resposta.data)
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
            console.log("dele", resposta.data)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    const renderizarComentario = comentarios && comentarios.map((comentario) => {
        return <Container1>
            <Container4>
                <Container2>
                    <h6>Enviado por: {comentario.username}</h6>
                </Container2>
                <Container3>
                    {comentario.body}
                </Container3>
            </Container4>
            <Container8>
                <BotaoSeta onClick={() => votePost(comentario.id)}><ImgSetaCima src={SetaCima} width={14} /></BotaoSeta>
                {comentario.voteSum}
                <BotaoSetaBaixo onClick={() => unVotePost(comentario.id)}><img src={SetaBaixo} width={14} /></BotaoSetaBaixo>
                {/* <button onClick={() => delVotePost(comentario.id)}>TESTE DEL</button> */}
            </Container8>
        </Container1>
    })
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
            console.log(resposta.data)
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
            console.log(resposta.data)
        }).catch((erro) => {
            console.log(erro.response.data)
        })
    }
    console.log(result)
    return (
        <Container4 backColor={colorTeste}>
            <div>
                <Container5>
                    <Container6>
                        <h6>Enviado Por: {result.username}</h6>
                    </Container6>
                    <Container7>
                        {result.body}
                    </Container7>
                    <Container22>
                        <Container8>
                            <BotaoSeta onClick={() => mainVotePost(result.id)}><img src={SetaCima} width={14} /></BotaoSeta>
                            {result.userVote}
                            <BotaoSetaBaixo onClick={() => mainUnVotePost(result.id)}><img src={SetaBaixo} width={14} /></BotaoSetaBaixo>
                            {/* <button onClick={() => delVotePost(result.id)}>Teste DEL</button> */}
                        </Container8>
                        <ContainerTeste>
                            {result.commentCount}<img src={iconcomentario} width={20} />
                        </ContainerTeste>
                    </Container22>
                </Container5>
            </div>
            <Container9>
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
            </Container9>
            <div>
                {renderizarComentario}
            </div>
        </Container4>
    )
}

export default DetalhePost;