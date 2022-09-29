import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, ITicketDB, Show } from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public toShowDBModel = (show: Show): IShowDB => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }
        return showDB
    }
    createShow = async (id: string, band: string, starts_at: string,) => {
        // await BaseDatabase.connection()
        //     .insert({
        //         id,
        //         band,
        //         starts_at
        //     })
        //     .into(ShowDatabase.TABLE_SHOWS);
    };
    getShows = async () => {
        // const result = await BaseDatabase.connection()
        //     .select("*")
        //     .into(ShowDatabase.TABLE_SHOWS)
        // const showModel = result.map((show) => {
        //     return new Show(
        //         show.id,
        //         show.band,
        //         show.starts_at
        //     )
        // })
        // for (let shows of showModel) {
        //     const showId = shows.getId()
        //     const tickets = await this.getClaimsTickets(showId)
        //     console.log(tickets)
        //     shows.setTickets(5000 - +(tickets))
        // }
        const showsDB: IShowDB[] = [
            {
                id: "201",
                band: "Foo Fighters",
                starts_at: new Date("2022/12/05")
            },
            {
                id: "202",
                band: "System of a Down",
                starts_at: new Date("2022/12/06")
            },
            {
                id: "203",
                band: "Evanescence",
                starts_at: new Date("2022/12/07")
            },
        ]
        return showsDB
    }
    getShowsbyDate = async (starts_at: string) => {
        // const result = await BaseDatabase.connection()
        //     .select("*")
        //     .from(ShowDatabase.TABLE_SHOWS)
        //     .where({ starts_at })
        // return result[0]
    }
    getShowbyId = async (id: string) => {
        // const result = await BaseDatabase.connection()
        //     .select("*")
        //     .from(ShowDatabase.TABLE_SHOWS)
        //     .where({ id })
        // return result[0]
    }
    getClaimsTickets = async (show_id: string) => {
        // const result = await BaseDatabase.connection()
        //     .select()
        //     .count("id")
        //     .into(ShowDatabase.TABLE_TICKETS)
        //     .where({
        //         show_id: show_id
        //     })
        // return result[0]["count(`id`)"]
    }
    getAllReserves = async (show_id: string, user_id: string) => {
        // const result = await BaseDatabase.connection()
        // .select("*")
        // .into(ShowDatabase.TABLE_TICKETS)
        // .where({
        //     show_id: show_id,
        //     user_id: user_id
        // })
        const tickets: ITicketDB[] = [
            {
                id: "301",
                show_id: "201",
                user_id: "101"
            },
            {
                id: "302",
                show_id: "202",
                user_id: "101"
            },
            {
                id: "303",
                show_id: "203",
                user_id: "101"
            },
            {
                id: "304",
                show_id: "201",
                user_id: "102"
            },
            {
                id: "305",
                show_id: "201",
                user_id: "102"
            },
            {
                id: "306",
                show_id: "202",
                user_id: "103"
            }
        ]
        return tickets
    }
    claimTicket = async (id: string, show_id: string, user_id: string) => {
        // await BaseDatabase.connection()
        //     .insert({
        //         id,
        //         show_id,
        //         user_id
        //     })
        //     .into(ShowDatabase.TABLE_TICKETS)
    }
    deleteTicket = async (show_id: string, user_id: string) => {
        // await BaseDatabase.connection()
        //     .delete()
        //     .from(ShowDatabase.TABLE_TICKETS)
        //     .where({
        //         show_id: show_id,
        //         user_id: user_id
        //     })

    }
}