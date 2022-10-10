import { PostBusiness } from "../../src/business/PostBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ICreatePostInputDTO, } from "../../src/models/Post"
import { AuthenticatorMock } from "../mocks/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"

describe("Testando o metodo createPost da PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )
    test("Post é criado", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Teste do mock"
        }
        const response = await postBusiness.createPost(input)
        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post.getContent()).toBe("Teste do mock")
    })
    test("Erro qunado o content não possui mais que 1 caracter", async () => {
        expect.assertions(2)
        try {
            const input: ICreatePostInputDTO = {
                token: "token-mock-normal",
                content: ""
            }
            await postBusiness.createPost(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'content' inválido: mínimo de 1 caracteres")
            }
        }
    })
})