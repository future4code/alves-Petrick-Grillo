import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { loginUserDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando o método de login da Userbisness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    test("Login quando é bem sucedido", async () => {
        const input: loginUserDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }
        const response = await userBusiness.loginUser(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-admin")
    })
    // test("Erro quando password não possui 6 caracteres", async () => {
    //     expect.assertions(2)
    //     try {
    //         const input: loginUserDTO = {
    //             email: "usermock@gmail.com",
    //             password: "banan"
    //         }
    //         await userBusiness.loginUser(input)
    //     } catch (error) {
    //         if (error instanceof BaseError) {
    //             expect(error.statusCode).toBe(400)
    //             expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
    //         }
    //     }
    // })
})