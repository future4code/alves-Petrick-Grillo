import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls";
import GlobalContext from "../../Global/GlobalContext";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData";

function DetalhePost() {
    useProtectedPage()
    const params = useParams()
    const { post } = useContext(GlobalContext)
    const navigate = useNavigate()
    const { form, onChange } = useForm({ body: "" })
    const comentarios = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log(comentarios)

    useEffect(() => {
    }, [])

    const createComment = (id) => {
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            console.log(resposta.data)
        }).catch((erro) => {
            alert("Falha ao enviar, tente novamente")
            console.log(erro.message)
        })
    }
    const result = post.find(idpost => idpost.id === params.id)
    console.log(result)

    const goToPosts = () => {
        navigate("/ListaPost")
    }
    const goToBack = () => {
        navigate(-1)
    }

    const renderizarComentario = comentarios && comentarios.map((comentario) => {
        return <div>
            <div>
                <h6>Enviado por:{comentario.username}</h6>
            </div>
            <div>
                {comentario.body}
            </div>
        </div>
    })
    return (
        <div>
            <div>
                <div>
                    {result.username}
                </div>
                <div>
                    {result.body}
                </div>
            </div>
            <div>
                <form>
                    <input
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        required
                        placeholder="Escreva seu comentário..."
                    />
                    <button onClick={() => createComment(params.id)}>Responder</button>
                </form>
            </div>
            <div>
                {renderizarComentario}
            </div>
        </div>
    )
}

export default DetalhePost;