import { Comp, INameCompDB, IResultDB, Result } from "../models/Comp";
import { BaseDatabase } from "./BaseDatabase";

export class CompDatabase extends BaseDatabase {
    public static Estante_NameComp = "Estante_NameComp"
    public static Estante_Comp = "Estante_Comp"
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
    getComp = async (competicao_id: string) => {
        const result: IResultDB[] = await CompDatabase.connection()
            .select("*")
            .from(CompDatabase.Estante_Comp)
            .where({ competicao_id })
        return result[0]
    }
}