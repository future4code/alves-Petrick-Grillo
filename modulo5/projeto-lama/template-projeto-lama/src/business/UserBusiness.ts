import { UserDatabase } from "../database/UserDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ParamsError } from "../errors/ParamsError"
import { IUserDB, loginUserDTO, payload, response, responseSign, signupUserDTO, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }
    signupUser = async (input: signupUserDTO) => {
        let { name, email, password } = input
        if (!password || password.length < 6) {
            throw new ParamsError("Invalid password")
        }
        if (!name || name.length < 3) {
            throw new ParamsError("Insira um nome valido!")
        }
        if (typeof name !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        if (typeof password !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        if (typeof email !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new ParamsError("Parâmetro 'email' inválido")
        }
        const passwordHash = await this.hashManager.hash(password)
        const id = this.idGenerator.generate()
        const user = new User(
            id,
            name,
            email,
            passwordHash,
            USER_ROLES.NORMAL
        )
        await this.userDatabase.createUser(user)
        let payload: payload = {
            id: id,
            role: USER_ROLES.NORMAL
        }
        const token = this.authenticator.generateToken(payload)
        const response: responseSign = {
            message: "Cadastro realizado com sucesso",
            token: token
        }
        return response
    }
    loginUser = async (input: loginUserDTO) => {
        const { email, password } = input
        if (typeof password !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        if (typeof email !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        if (!password || password.length < 6) {
            throw new ParamsError("Parâmetro 'password' inválido: mínimo de 6 caracteres")
        }
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new ParamsError("Parâmetro 'email' inválido")
        }
        const user = await this.userDatabase.getUserByEmail(email)
        console.log(user)
        if (!user) {
            throw new ParamsError("email não encontrado")
        }
        console.log(user.password)
        console.log(password)
        const isPasswordCorrect = await this.hashManager.compare(password, user.password)
        console.log(isPasswordCorrect)
        if (!isPasswordCorrect) {
            throw new AuthenticationError("Parâmetro 'password' inválido")
        }
        console.log(user.id)
        let payload: payload = {
            id: user.id,
            role: user.role
        }
        const token = this.authenticator.generateToken(payload)
        const response: responseSign = {
            message: "Login realizado com sucesso",
            token: token
        }
        return response
    }
}