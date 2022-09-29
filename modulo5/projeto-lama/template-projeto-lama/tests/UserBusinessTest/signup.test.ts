// import { UserBusiness } from "../../src/business/UserBusiness"
// import { signupUserDTO } from "../../src/models/User"
// import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
// import { HashManagerMock } from "../mocks/services/HashManagerMock"
// import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
// import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

// describe("Testando o método de signup da UserBusiness", () => {
//     const userBusiness = new UserBusiness(
//         new UserDatabaseMock(),
//         new IdGeneratorMock(),
//         new HashManagerMock(),
//         new AuthenticatorMock()
//     )
//     test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
//         const input: signupUserDTO = {
//             email: "fulano@gmail.com",
//             name: "Fulano",
//             password: "fulano123"
//         }

//         const response = await userBusiness.signupUser(input)
//         expect(response.message).toBe("Cadastro realizado com sucesso")
//         expect(response.token).toBe("token-mock-normal")
//     })
// })