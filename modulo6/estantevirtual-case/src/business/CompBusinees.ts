import { CompDatabase } from "../database/CompDatabase";
import { ParamsError } from "../errors/ParamsError";
import { Comp, ICompleteDB, ICompleteInputDB, INameCompDB, INameInputDB, IResultDB, IResultInputDB, responseCreate, Result, Status } from "../models/Comp";
import { IdGenerator } from "../services/IdGenerator";

export class CompBusiness {
    constructor(
        private compDatabase: CompDatabase,
        private idGenerator: IdGenerator,
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
        const statusComp = "Em andamento"
        const status = new Status(
            statusComp,
            idComp,
        )
        await this.compDatabase.createComp(comp)
        await this.compDatabase.insertStatus(status)
        const response: responseCreate = {
            message: "Competição criada com sucesso!"
        }
        return response
    }
    signupComp = async (input: IResultInputDB) => {
        const { competicao_id, atleta, value, unidade } = input
        if (typeof competicao_id !== "string") {
            throw new ParamsError(`O ${competicao_id} não é do tipo string`)
        }
        if (typeof atleta !== "string") {
            throw new ParamsError(`O ${atleta} não é do tipo string`)
        }
        if (typeof value !== "number") {
            throw new ParamsError(`O ${value} não é do tipo number`)
        }
        if (typeof unidade !== "string") {
            throw new ParamsError(`O ${unidade} não é do tipo string`)
        }
        const verifyResult = await this.compDatabase.getStatus(competicao_id)
        if (verifyResult.status === "Concluído") {
            throw new ParamsError(`A competição com o id: ${competicao_id} ja foi finalizada!`)
        }
        const idSignUp = this.idGenerator.generate()
        const result = new Result(
            idSignUp,
            competicao_id,
            atleta,
            value,
            unidade
        )
        await this.compDatabase.insertResult(result)
        const response: responseCreate = {
            message: "Informação inserida com sucesso!"
        }
        return response
    }
    editStatus = async (input: ICompleteInputDB) => {
        const { competicao_id } = input
        if (typeof competicao_id !== "string") {
            throw new ParamsError(`O ${competicao_id} não é do tipo string`)
        }
        const statusComp = await this.compDatabase.getStatus(competicao_id)
        let newStatus = "Concluído"
        if (statusComp.status === "Em andamento") {
            newStatus = "Concluído"
            await this.compDatabase.editStatus(competicao_id, newStatus)
        }
        const response: responseCreate = {
            message: "Competição editada com sucesso!"
        }
        return response
    }
    listAthletes = async (input: ICompleteInputDB) => {
        const { competicao_id } = input
        if (typeof competicao_id !== "string") {
            throw new ParamsError(`O ${competicao_id} não é do tipo string`)
        }
        const verifyResult = await this.compDatabase.getStatus(competicao_id)
        let alertComp = "Concluído"
        if (verifyResult.status === "Em andamento") {
            alertComp = "Competição em andamento!"
        }
        const arrayResult = await this.compDatabase.getCompAll(competicao_id)
        const unidade = arrayResult[0].unidade
        let orderBy = "asc"
        if (unidade === "m") {
            orderBy = "desc"
        }
        const resultsByOrder = await this.compDatabase.getResult(competicao_id, orderBy)
        const response = {
            "Status da competição": alertComp,
            resultsByOrder
        }
        return response
    }
}