export interface IResultDB {
    id: string,
    competicao_id: string,
    atleta: string,
    value: string,
    unidade: string
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