import { IResultDB, INameCompDB, ICompleteDB } from "../../models/Comp";

export const nameComps: INameCompDB[] = [
    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        competicao: "100m classificatoria 1"
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        competicao: "Dardo semifinal"
    }
]
export const users: IResultDB[] = [

    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399B",
        competicao_id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        atleta: "Joao das Neves",
        value: 10.23,
        unidade: "s"
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01F",
        competicao_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        atleta: "Claudio",
        value: 70.43,
        unidade: "m"
    }
]

export const complete: ICompleteDB[] = [
    {
        status: "Concluído",
        competicao_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b"
    }
]