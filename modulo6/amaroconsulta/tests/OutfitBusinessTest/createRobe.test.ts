import { OutfitBusiness } from "../../src/businees/OutfitBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IOutfitRobesInputDB } from "../../src/models/Outfit"
import { OutfitDatabaseMock } from "../mocks/OutfitDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("Testando o método de createRobe da OutfitBusiness", () => {
    const outfitBusiness = new OutfitBusiness(
        new OutfitDatabaseMock(),
        new IdGeneratorMock()
    )
    test("Testando a resposta de um cadastro bem-sucedido", async () => {
        const input: IOutfitRobesInputDB = {
            name: "VESTIDO TRICOT CHEVRON"
        }
        const response = await outfitBusiness.signupRobe(input)
        expect(response.message).toBe("Roupa cadastrada com sucesso!")
    })
    test("Erro quando o nome do vestido possui menos que 3 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: IOutfitRobesInputDB = {
                name: "V"
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
            const input: IOutfitRobesInputDB = {
                name: 1
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