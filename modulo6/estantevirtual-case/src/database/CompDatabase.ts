import { Comp, ICompleteDB, INameCompDB, IResultDB, Result, Status } from "../models/Comp";
import { BaseDatabase } from "./BaseDatabase";

export class CompDatabase extends BaseDatabase {
    public static Estante_NameComp = "Estante_NameComp"
    public static Estante_Comp = "Estante_Comp"
    public static Estante_Complete = "Estante_Complete"
    toResultDBModel = (result: Result): IResultDB => {
        const resultDB: IResultDB = {
            id: result.getId(),
            competicao_id: result.getCompeticaoID(),
            atleta: result.getAtleta(),
            value: result.getValue(),
            unidade: result.getUnidade()
        }
        return resultDB
    }
    toCompDBModel = (comp: Comp): INameCompDB => {
        const compDB: INameCompDB = {
            id: comp.getId(),
            competicao: comp.getCompeticao()
        }
        return compDB
    }
    toStatusDBModel = (status: Status): ICompleteDB => {
        const statusDB: ICompleteDB = {
            status: status.getStatus(),
            competicao_id: status.getCompeticao_id(),
        }
        return statusDB
    }
    createComp = async (comp: Comp): Promise<void> => {
        const resultDB = this.toCompDBModel(comp)
        await BaseDatabase
            .connection(CompDatabase.Estante_NameComp)
            .insert(resultDB)
    }
    insertResult = async (result: Result): Promise<void> => {
        const resultDB = this.toResultDBModel(result)
        await BaseDatabase
            .connection(CompDatabase.Estante_Comp)
            .insert(resultDB)
    }
    insertStatus = async (status: Status): Promise<void> => {
        const statusDB = this.toStatusDBModel(status)
        await BaseDatabase
            .connection(CompDatabase.Estante_Complete)
            .insert(statusDB)
    }
    editStatus = async (competicao_id: string, status: string): Promise<void> => {
        await CompDatabase.connection()
            .from(CompDatabase.Estante_Complete)
            .where({ competicao_id })
            .update({ status: status })
    }
    getResult = async (competicao_id: string, order: string): Promise<any> => {
        const result: IResultDB[] = await CompDatabase.connection()
            .select(`"${order}"`)
            .from(CompDatabase.Estante_Comp)
            .where({ competicao_id })
        return result
    }
    getStatus = async (competicao_id: string): Promise<ICompleteDB | undefined> => {
        const result: ICompleteDB[] = await CompDatabase.connection()
            .select("*")
            .from(CompDatabase.Estante_Complete)
            .where({ competicao_id })
        return result[0]
    }
}