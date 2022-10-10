import { CompBusiness } from "../../src/business/CompBusinees"
import { IResultInputDB } from "../../src/models/Comp"
import { CompDatabaseMock } from "../mocks/CompDatabaseMock"
import { IdGeneratorMock } from "../services/IdGeneratorMock"

describe("Testando o metodo createComp da CompBusiness", () => {
    const compBusiness = new CompBusiness(
        new CompDatabaseMock(),
        new IdGeneratorMock()
    )
    test("Competição é criada", async () => {
        const input: IResultInputDB = {
            competicao_id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
            atleta: "Joao das Neves",
            value: 10.23,
            unidade: "s"
        }
        const response = await compBusiness.signupComp(input)
        expect(response.message).toBe("Informação inserida com sucesso!")
    })
})