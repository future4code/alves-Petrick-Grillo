import { OutfitBusiness } from "../../src/businees/OutfitBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IOutfitLinkEspecifyInput, IOutfitLinkInput } from "../../src/models/Outfit"
import { OutfitDatabaseMock } from "../mocks/OutfitDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("Testando o método de EspecifyRobe da OutfitBusiness", () => {
    const outfitBusiness = new OutfitBusiness(
        new OutfitDatabaseMock(),
        new IdGeneratorMock()
    )
    test("Testando a resposta de um cadastro bem-sucedido", async () => {
        const input: IOutfitLinkEspecifyInput = {
            name: "VESTIDO TRICOT CHEVRON",
            tags: "balada"
        }
        const response = await outfitBusiness.signupTagInEspecifyRobe(input)
        expect(response.message).toBe("Roupas registradas cadastrada com sucesso!")
    })
    test("Erro quando o name do vestido possui menos que 3 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: IOutfitLinkEspecifyInput = {
                name: "VE",
                tags: "balada"
            }
            await outfitBusiness.signupTagInEspecifyRobe(input)
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
            const input: IOutfitLinkEspecifyInput = {
                name: 545,
                tags: ["balada"]
            } as any
            await outfitBusiness.signupTagInEspecifyRobe(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Insira uma string!")
            }
        }
    })
    test("Erro quando o tag não for do tipo string", async () => {
        expect.assertions(2)
        try {
            const input: IOutfitLinkEspecifyInput = {
                name: "VESTIDO TRICOT CHEVRON",
                tags: 696
            } as any
            await outfitBusiness.signupTagInEspecifyRobe(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Insira uma string!")
            }
        }
    })
})