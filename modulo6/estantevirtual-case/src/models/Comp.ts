export interface IResultDB {
    id: string,
    competicao_id: string,
    atleta: string,
    value: string,
    unidade: string
}
export interface IResultInputDB {
    competicao_id: string,
    atleta: string,
    value: string,
    unidade: string
}
export interface ICompleteDB {
    status: string,
    competicao_id: string,
}
export interface ICompleteInputDB {
    competicao_id: string,
}
export interface INewStatus {
    status: string
}
export interface INameCompDB {
    id: string,
    competicao: string
}
export interface INameInputDB {
    competicao: string
}
export interface responseCreate {
    message: string
}
export class Comp {
    constructor(
        private id: string,
        private competicao: string,
    ) { }
    public getId = () => {
        return this.id
    }
    public getCompeticao = () => {
        return this.competicao
    }
}
export class Status {
    constructor(
        private status: string,
        private competicao_id: string,
    ) { }
    public getStatus = () => {
        return this.status
    }
    public getCompeticao_id = () => {
        return this.competicao_id
    }
    public setStatus = (newStatus: string) => {
        this.status = newStatus
    }
}
export class NewStatus {
    constructor(
        private status: string
    ) { }
    public getStatus = () => {
        return this.status
    }
}
export class Result {
    constructor(
        private id: string,
        private competicao_id: string,
        private atleta: string,
        private value: string,
        private unidade: string
    ) { }
    public getId = () => {
        return this.id
    }
    public getCompeticaoID = () => {
        return this.competicao_id
    }
    public getAtleta = () => {
        return this.atleta
    }
    public getValue = () => {
        return this.value
    }
    public getUnidade = () => {
        return this.unidade
    }
}