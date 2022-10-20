import { OutfitBusiness } from "../../src/businees/OutfitBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IOutfitLinkInput } from "../../src/models/Outfit"
import { OutfitDatabaseMock } from "../mocks/OutfitDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("Testando o método de linkIds da OutfitBusiness", () => {
    const outfitBusiness = new OutfitBusiness(
        new OutfitDatabaseMock(),
        new IdGeneratorMock()
    )
    test("Testando a resposta de um cadastro bem-sucedido", async () => {
        const input: IOutfitLinkInput = {
            name: "VESTIDO TRICOT CHEVRON",
            tags: ["balada", "neutro", "delicado", "festa", "casual", "metal"]
        }
        const response = await outfitBusiness.linkIds(input)
        expect(response.message).toBe("Roupas registradas cadastrada com sucesso!")
    })
    test("Erro quando o name do vestido possui menos que 3 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: IOutfitLinkInput = {
                name: "VE",
                tags: ["balada", "neutro", "delicado", "festa", "casual", "metal"]
            }
            await outfitBusiness.signupRobe(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Insira um nome valido!")
            }
        }
    })
    test("Erro quando o nome não for do tipo string", async () => {
        expect.assertions(2)
        try {
            const input: IOutfitLinkInput = {
                name: 545,
                tags: ["balada", "neutro", "delicado", "festa", "casual", "metal"]
            } as any
            await outfitBusiness.signupRobe(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Insira uma string!")
            }
        }
    })
})