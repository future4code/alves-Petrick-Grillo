import React, { useContext } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import GlobalContext from "../../Global/GlobalContext";
import { MainContainer, Titulo, Input, Form, BotaoCadastro } from "./styled"

function Signup() {
    useUnprotectedPage()
    const { form, onChange } = useForm({ username: "", email: "", password: "" })
    const { setRightButtonText, colorTeste } = useContext(GlobalContext)
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/")
    }
    const onSubmitSignup = (event) => {
        event.preventDefault()
        signUp()
    }

    const signUp = () => {
        axios.post(`${BASE_URL}/users/signup`, form)
            .then((resposta) => {
                localStorage.setItem("token", resposta.data.token)
                setRightButtonText("LOGOUT")
                goToLogin()
            }).catch((erro) => {
                console.log(erro.response.data)
            })
    }

    return (
        <MainContainer backColor={colorTeste}>
            <Titulo>
                Olá, boas vindas ao LabEddit ;)
            </Titulo>
            <Form onSubmit={onSubmitSignup}>
                <Input
                    name={"username"}
                    placeholder="Nome"
                    type={"username"}
                    value={form.username}
                    onChange={onChange}
                    required
                />
                <Input
                    name={"email"}
                    placeholder="E-mail"
                    type={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                    pattern={"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"}
                />
                <Input
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    placeholder="Senha"
                    type={"password"}
                    required
                    pattern={"^[0-9]{8,}$"}
                    title="A senha deve conter 8 NÚMEROS ou mais"
                />
                <BotaoCadastro type={"submit"}>Fazer Cadastro</BotaoCadastro>
            </Form>
        </MainContainer>
    )
}

export default Signup;