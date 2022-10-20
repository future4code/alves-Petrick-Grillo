import { OutfitBusiness } from "../../src/businees/OutfitBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IOutfitTagsDB } from "../../src/models/Outfit"
import { OutfitDatabaseMock } from "../mocks/OutfitDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("Testando o método de signupTags da OutfitBusiness", () => {
    const outfitBusiness = new OutfitBusiness(
        new OutfitDatabaseMock(),
        new IdGeneratorMock()
    )
    test("Testando a resposta de um cadastro bem-sucedido", async () => {
        const input: IOutfitTagsDB = {
            tags: "carnavalesca"
        }
        const response = await outfitBusiness.signupTag(input)
        expect(response.message).toBe("TAG cadastrada com sucesso!")
    })
    test("Erro quando o nome não for do tipo string", async () => {
        expect.assertions(2)
        try {
            const input: IOutfitTagsDB = {
                tags: 3323
            } as any
            await outfitBusiness.signupTag(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Insira uma string!")
            }
        }
    })
})