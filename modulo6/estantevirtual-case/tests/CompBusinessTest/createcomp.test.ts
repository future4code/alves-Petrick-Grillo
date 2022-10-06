import { CompBusiness } from "../../src/business/CompBusinees"
import { INameCompDB, INameInputDB } from "../../src/models/Comp"
import { CompDatabaseMock } from "../mocks/CompDatabaseMock"
import { IdGeneratorMock } from "../services/IdGeneratorMock"

describe("Testando o metodo createComp da CompBusiness", () => {
    const compBusiness = new CompBusiness(
        new CompDatabaseMock(),
        new IdGeneratorMock()
    )
    test("Competição é criada", async () => {
        const input: INameCompDB = {
            id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
            competicao: "100m classificatoria 1"
        }
        const response = await compBusiness.createComp(input)
        expect(response.message).toBe("Competição criada com sucesso!")
    })
})