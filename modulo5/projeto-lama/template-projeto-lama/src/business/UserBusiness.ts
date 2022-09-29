import { UserDatabase } from "../database/UserDatabase"
import { ParamsError } from "../errors/ParamsError"
import { IUserDB, loginUserDTO, payload, response, responseSign, signupUserDTO, USER_ROLES } from "../models/User"
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
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new ParamsError("Parâmetro 'email' inválido")
        }
        if (!password || password.length < 6) {
            throw new Error("Invalid password")
        }
        if (!name || name.length < 3) {
            throw new Error("Insira um nome valido!")
        }
        if (typeof name !== "string") {
            throw new Error("Insira uma string!")
        }
        if (typeof password !== "string") {
            throw new Error("Insira uma string!")
        }
        if (typeof email !== "string") {
            throw new Error("Insira uma string!")
        }
        const passwordHash = await this.hashManager.hash(password)
        const id = this.idGenerator.generate()
        await this.userDatabase.createUser(id, name, email, passwordHash, USER_ROLES.NORMAL)
        let payload: payload = {
            id: id,
            role: USER_ROLES.NORMAL
        }
        const token = this.authenticator.generateToken(payload)
        const response: responseSign = {
            usuario: name,
            token: token
        }
        return response
    }
    loginUser = async (input: loginUserDTO) => {
        const { email, password } = input
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new ParamsError("Parâmetro 'email' inválido")
        }
        if (typeof password !== "string") {
            throw new Error("Insira uma string!")
        }
        if (typeof email !== "string") {
            throw new Error("Insira uma string!")
        }
        if (!password || password.length < 6) {
            throw new Error("Invalid password")
        }
        const user: IUserDB = await this.userDatabase.getUserByEmail(email)
        if (!user) {
            throw new Error("email não encontrado")
        }
        const isPasswordCorrect = await this.hashManager.compare(password, user.password)
        if (!isPasswordCorrect) {
            throw new Error("Invalid password")
        }
        let payload: payload = {
            id: user.id,
            role: user.role
        }
        const token = this.authenticator.generateToken(payload)
        const response: response = {
            token
        }
        return response
    }
}