import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/AuthenticatorMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando o motodo login da UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Login quando é bem sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }
        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })
    test("Erro quando password não possui 6 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "fulano@gmail.com",
                password: "12345"
            }
            await userBusiness.login(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })
    test("Erro quando o password nao for do tipo string", async () => {
        try {
            const input: ILoginInputDTO = {
                email: "fulano@gmail.com",
                password: 2
            } as any
            await userBusiness.login(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido")
            }
        }
    })
    test("Erro quando o email nao passar no regex", async () => {
        try {
            const input: ILoginInputDTO = {
                email: "fulanogmailcom",
                password: "123456"
            }
            await userBusiness.login(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })
    test("Erro quando o email nao estar cadastrado", async () => {
        try {
            const input: ILoginInputDTO = {
                email: "fulano1@gmail.com",
                password: "123456"
            }
            await userBusiness.login(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Email não cadastrado")
            }
        }
    })
})