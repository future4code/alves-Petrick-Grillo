import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, Titulo, Input, Container1, Container2, Container3, Container4, Container5, Container6, BotaoLogin, BotaoCriar, Form, Line } from "./styled";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import GlobalContext from "../../Global/GlobalContext";
import Logo from "../../img/LogoTXT.png"
import Linha from "../../img/Linha.png"

function Login() {
    useUnprotectedPage()
    const { form, onChange } = useForm({ email: "", password: "" })
    console.log(form)
    const { setRightButtonText, colorTeste } = useContext(GlobalContext)
    const navigate = useNavigate()

    const goToSignUp = () => {
        navigate("/Signup")
    }
    const goToPost = () => {
        navigate("/ListaPost")
    }
    const onSubmitLogin = (event) => {
        event.preventDefault()
        login()
    }
    const login = () => {
        axios.post(`${BASE_URL}/users/login`, form)
            .then((resposta) => {
                console.log(resposta.data)
                localStorage.setItem("token", resposta.data.token)
                setRightButtonText("LOGOUT")
                goToPost()
            }).catch((erro) => {
                console.log(erro)
            })
    }
    const conferirLogin = () => {
        if (localStorage.getItem("token") === true)
            return goToPost()
    }
    useEffect(() => {
        conferirLogin()
    }, [])
    return (
        <MainContainer backColor={colorTeste}>
            <Titulo>
                <img src={Logo} />
                <h3>O projeto de rede social da Labenu</h3>
            </Titulo>
            <Container1>
                <Form onSubmit={onSubmitLogin}>
                    <Container2>
                        <Input
                            name={"email"}
                            placeholder="E-mail"
                            type={"email"}
                            value={form.email}
                            onChange={onChange}
                            required
                            pattern={"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"}
                        />
                    </Container2>
                    <Container2>
                        <Input
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            placeholder="Senha"
                            type={"password"}
                            required
                        />
                    </Container2>
                    <BotaoLogin type={"submit"}>Continuar</BotaoLogin>
                </Form>
            </Container1>
            <Line src={Linha} />
            <Container4>
                <BotaoCriar onClick={goToSignUp}>Crie uma conta!</BotaoCriar>
            </Container4>
        </MainContainer>
    )
}

export default Login;