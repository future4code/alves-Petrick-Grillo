import React, { useContext } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import GlobalContext from "../../Global/GlobalContext";
import styled from "styled-components";

const MainContainer = styled.div`
background:${props => props.backColor};
height: 100vh;
`
const Titulo = styled.div`
font-size: 33px;
font-weight: 700;
line-height: 43px;
letter-spacing: 0em;
text-align: left;
color:#FE7E02;
`
const Input = styled.input`
height: 60px;
width: 363px;
left: 0px;
top: 0px;
border-radius: 4px;
border-color:grey;
margin:1%;
padding-left:50px;
`
const Form = styled.form`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const BotaoCadastro = styled.button`
height: 51px;
width: 365px;
left: 32px;
top: 785px;
border-radius: 27px;
padding: 13px, 133px, 13px, 133px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
color:white;
font-size: 18px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
border:none;
`
function Signup() {
    useUnprotectedPage()
    const { form, onChange } = useForm({ username: "", email: "", password: "" })
    console.log(form)
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
                console.log(resposta.data.token)
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