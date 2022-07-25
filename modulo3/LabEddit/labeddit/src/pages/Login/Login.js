import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import GlobalContext from "../../Global/GlobalContext";
import Logo from "../../img/LogoTXT.png"

const MainContainer = styled.div`
`
const Titulo = styled.div`
padding:1%;
margin:2%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Input = styled.input`
padding:1%;
`
const Imagem = styled.img`
#grad {
  background-image: linear-gradient(red, yellow, green);
}
`
function Login() {
    useUnprotectedPage()
    const { form, onChange } = useForm({ email: "", password: "" })
    console.log(form)
    const { setRightButtonText } = useContext(GlobalContext)
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

    return (
        <MainContainer>
            <Titulo>
                <img src={Logo} />
                <h3>O projeto de rede social da Labenu</h3>
            </Titulo>
            <div>
                <form onSubmit={onSubmitLogin}>
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
                    />
                    <button type={"submit"}>Entrar</button>
                </form>
            </div>
            <div>
                <button onClick={goToSignUp}>Inscreva-se</button>
            </div>
        </MainContainer>
    )
}

export default Login;