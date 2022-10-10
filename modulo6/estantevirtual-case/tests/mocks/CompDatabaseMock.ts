import { CompDatabase } from "../../src/database/CompDatabase";
import { Comp, ICompleteDB, INameCompDB, IResultDB, Result, Status } from "../../src/models/Comp";

export class CompDatabaseMock extends CompDatabase {
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
    createComp = async (comp: Comp): Promise<void> => { }
    // insertResult = async (result: Result): Promise<void> => {
    //     const resultDB = this.toResultDBModel(result)
    //     await BaseDatabase
    //         .connection(CompDatabase.Estante_Comp)
    //         .insert(resultDB)
    insertResult = async (result: Result): Promise<void> => {
        // const resultDB = this.toResultDBModel(result)
        // await BaseDatabase
        //     .connection(CompDatabase.Estante_Comp)
        //     .insert(resultDB)
    }
    insertStatus = async (status: Status): Promise<void> => {
        // const statusDB = this.toStatusDBModel(status)
        // await BaseDatabase
        //     .connection(CompDatabase.Estante_Complete)
        //     .insert(statusDB)
    }
    // ************
    // editStatus = async (competicao_id: string, status: string): Promise<void> => {
    //     await CompDatabase.connection()
    //         .from(CompDatabase.Estante_Complete)
    //         .where({ competicao_id })
    //         .update({ status: status })
    // }
    // ************
    // getStatus = async (): Promise<ICompleteDB[]> => {
    //     // const result: ICompleteDB[] = await CompDatabase.connection()
    //     //     .select("*")
    //     //     .from(CompDatabase.Estante_Complete)
    //     //     .where({ competicao_id })
    //     // return result[0]
    //     const statusComp: ICompleteDB[] = [
    //         {
    //             status: "Concluído",
    //             competicao_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b"
    //         }
    //     ]
    //     return statusComp
    // }
}