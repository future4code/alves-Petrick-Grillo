import { OutfitBusiness } from "../../src/businees/OutfitBusiness"
import {  IOutfitRobesInputDB } from "../../src/models/Outfit"
import { OutfitDatabaseMock } from "../mocks/OutfitDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("Testando o método de createRobe da OutfitBusiness", () => {
    const outfitBusiness = new OutfitBusiness(
        new OutfitDatabaseMock(),
        new IdGeneratorMock()
    )
    test("Testando a resposta de um cadastro bem-sucedido", async () => {
        const input:IOutfitRobesInputDB = {
            name: "VESTIDO TRICOT CHEVRON"
        }
        const response = await outfitBusiness.signupRobe(input)
        expect(response.message).toBe("Roupa cadastrada com sucesso!")
    })
})  