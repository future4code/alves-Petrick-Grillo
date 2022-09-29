import { ShowDatabase } from "../database/ShowDatabase"
import { createShowDTO, infoUserDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }
    // 2004-05-21
    createShow = async (token: string, input: createShowDTO) => {
        let { band, starts_at } = input
        const tokenUser = this.authenticator.getTokenPayload(token)
        if (!tokenUser) {
            throw new Error("Invalid token")
        }
        if (tokenUser.role !== USER_ROLES.ADMIN) {
            throw new Error("Somente admins podem criar shows de outra pessoa")
        }
        const dateFormated = new Date(starts_at)
        const dateEvent = new Date("2022-12-05")
        if (dateFormated < dateEvent) {
            throw new Error("Data do show é antes do evento")
        }
        const idShow = this.idGenerator.generate()
        const teste = this.showDatabase.getShowsbyDate(starts_at)
        if (await teste) {
            throw new Error("Não podem ocorrer 2 shows no mesmo dia")
        }
        await this.showDatabase.createShow(idShow, band, starts_at)
        const msgShow = ({ message: "Show Criado!" })
        return msgShow
    }
    getShows = async () => {
        const shows = await this.showDatabase.getShows()
        const mapShows: any = shows.map((parametro) => {
            return ({
                id: parametro.getId(),
                band: parametro.getBand(),
                starts_at: parametro.getStartsAt(),
                tickets: parametro.getTickets()

            })
        })
        return mapShows
    }
    claimTicket = async (input: infoUserDTO) => {
        const tokenUser = this.authenticator.getTokenPayload(input.token)
        if (!tokenUser) {
            throw new Error("Invalid token")
        }
        const getTicketUser = await this.showDatabase.getAllReserves(input.show_id, tokenUser.id)
        if (getTicketUser.length) {
            throw new Error("Você somente pode resgatar um ticket por pessoa!")
        }
        const getShowbyId = await this.showDatabase.getShowbyId(input.show_id)
        if(!getShowbyId){
            throw new Error("Você precisa inserir um show valido!")
        }
        const verifyClaim = await this.showDatabase.getClaimsTickets(input.show_id)
        if (verifyClaim > 5000) {
            throw new Error("Ingressos Esgotados!")
        }
        const idTicket = this.idGenerator.generate()
        await this.showDatabase.claimTicket(idTicket, input.show_id, tokenUser.id)
        const TicketClaimed = ({ message: "Ticket Resgatado com sucesso!" })
        return TicketClaimed
    }
    unClaimTicket = async (input: infoUserDTO) => {
        const tokenUser = this.authenticator.getTokenPayload(input.token)
        if (!tokenUser) {
            throw new Error("Invalid token")
        }
        const getShowbyId = await this.showDatabase.getShowbyId(input.show_id)
        if(!getShowbyId){
            throw new Error("Você precisa inserir um show valido!")
        }
        const getTicketUser = await this.showDatabase.getAllReserves(input.show_id, tokenUser.id)
        if (!getTicketUser.length) {
            throw new Error("Você precisa resgatar o ticket!")
        }
        await this.showDatabase.deleteTicket(input.show_id, tokenUser.id)
        const unClaimed = ({ message: "Ticket retirado com sucesso!" })
        return unClaimed
    }
}