import { Show } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    // public showModel = () => {

    // }

    createShow = async (id: string, band: string, starts_at: string,) => {
        await BaseDatabase.connection()
            .insert({
                id,
                band,
                starts_at
            })
            .into(ShowDatabase.TABLE_SHOWS);
    };
    getShows = async () => {
        const result = await BaseDatabase.connection()
            .select("*")
            .into(ShowDatabase.TABLE_SHOWS)
        const showModel = result.map((show) => {
            return new Show(
                show.id,
                show.band,
                show.starts_at
            )
        })
        for (let shows of showModel) {
            const showId = shows.getId()
            const tickets = await this.getClaimsTickets(showId)
            console.log(tickets)
            shows.setTickets(5000 - +(tickets))
        }
        return showModel
    }
    getShowsbyDate = async (starts_at: string) => {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(ShowDatabase.TABLE_SHOWS)
            .where({ starts_at })
        return result[0]
    }
    getShowbyId = async (id: string) => {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(ShowDatabase.TABLE_SHOWS)
            .where({ id })
        return result[0]
    }
    getClaimsTickets = async (show_id: string) => {
        const result = await BaseDatabase.connection()
            .select()
            .count("id")
            .into(ShowDatabase.TABLE_TICKETS)
            .where({
                show_id: show_id
            })
        return result[0]["count(`id`)"]
    }
    getAllReserves = async (show_id: string, user_id: string) => {
        const result = await BaseDatabase.connection()
            .select("*")
            .into(ShowDatabase.TABLE_TICKETS)
            .where({
                show_id: show_id,
                user_id: user_id
            })
        return result
    }
    claimTicket = async (id: string, show_id: string, user_id: string) => {
        await BaseDatabase.connection()
            .insert({
                id,
                show_id,
                user_id
            })
            .into(ShowDatabase.TABLE_TICKETS)
    }
    deleteTicket = async (show_id: string, user_id: string) => {
        await BaseDatabase.connection()
            .delete()
            .from(ShowDatabase.TABLE_TICKETS)
            .where({
                show_id: show_id,
                user_id: user_id
            })

    }
}