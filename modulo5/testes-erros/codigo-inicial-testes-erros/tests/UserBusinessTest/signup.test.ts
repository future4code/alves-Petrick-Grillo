import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/AuthenticatorMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
describe("Testando o método signup da UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })
    test("Erro quando password não possui 6 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                email: "fulano@gmail.com",
                name: "Fulano",
                password: "123"
            }
            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })
    test("Erro quando o nome do usuario possui menos que 3 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                email: "fulano@gmail.com",
                name: "F",
                password: "123456"
            }
            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    })
})