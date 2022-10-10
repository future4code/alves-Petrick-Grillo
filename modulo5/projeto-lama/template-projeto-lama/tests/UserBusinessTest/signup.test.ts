import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { signupUserDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando o método de signup da UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: signupUserDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signupUser(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })
    test("Erro quando password não possui 6 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: signupUserDTO = {
                email: "fulano@gmail.com",
                name: "Fulano",
                password: "123"
            }
            await userBusiness.signupUser(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Invalid password")
            }
        }
    })
    test("Erro quando o nome do usuario possui menos que 3 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: signupUserDTO = {
                name: "F",
                email: "fulano@gmail.com",
                password: "123456"
            }
            await userBusiness.signupUser(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Insira um nome valido!")
            }
        }
    })
    test("Erro quando o password do usuario não ser uma string", async () => {
        expect.assertions(2)
        try {
            const input: signupUserDTO = {
                name: "Feroikld",
                email: "fulano@gmail.com",
                password: 2
            } as any
            await userBusiness.signupUser(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Insira uma string!")
            }
        }
    })
    test("Erro quando o email do usuario não ser compativel com o regex", async () => {
        expect.assertions(2)
        try {
            const input: signupUserDTO = {
                name: "Feroikld",
                email: "fulanogmailcom",
                password: "2312334"
            }
            await userBusiness.signupUser(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })
    test("Erro quando o password do usuario não ser uma string", async () => {
        expect.assertions(2)
        try {
            const input: signupUserDTO = {
                name: 1,
                email: "fulano@gmail.com",
                password: "123456"
            } as any
            await userBusiness.signupUser(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Insira uma string!")
            }
        }
    })
    test("Erro quando o email do usuario não ser uma string", async () => {
        expect.assertions(2)
        try {
            const input: signupUserDTO = {
                name: "112131331",
                email: 2,
                password: "123456"
            } as any
            await userBusiness.signupUser(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Insira uma string!")
            }
        }
    })
})