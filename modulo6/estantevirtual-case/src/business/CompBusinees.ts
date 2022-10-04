import { CompDatabase } from "../database/CompDatabase";
import { ParamsError } from "../errors/ParamsError";
import { Comp, INameCompDB, INameInputDB, IResultDB, responseCreate } from "../models/Comp";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class CompBusiness {
    constructor(
        private compDatabase: CompDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }
    createComp = async (input: INameInputDB) => {
        const { competicao } = input
        if (typeof competicao !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        const idComp = this.idGenerator.generate()
        const comp = new Comp(
            idComp,
            competicao
        )
        await this.compDatabase.createComp(comp)
        const response: responseCreate = {
            message: "Competição criada com sucesso!"
        }
        return response
    }
    signupComp = async (input: IResultDB) => {

    }
}