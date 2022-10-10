import { PostBusiness } from "../../src/business/PostBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IGetPostsInputDTO, Post } from "../../src/models/Post"
import { AuthenticatorMock } from "../mocks/AuthenticatorMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )
    test("Deve retornar uma lista de posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })
    test("Caso de o token ser invalido", async () => {
        try {
            const input: IGetPostsInputDTO = {
                token: "token-mock-normal1"
            }
            await postBusiness.getPosts(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Credenciais inválidas")
            }
        }
    })
})