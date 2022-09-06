import axios from "axios";
import { baseURL } from "./baseURL";
const getSubscribers02 = async (): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    const idsUser = response.data.map((parametro: any) => {
        return parametro.id
    });
    return idsUser
}
getSubscribers02()

const exerc5 = async (ids: string[]): Promise<any> => {
    for (const id of ids)
        try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: id,
                message: "Nova notificação"
            })
            console.log(`Notificação enviada a ${id}`)
        } catch (erro) {
            console.log(`Erro ao enviar para ${id}`)
        }
}
(async () => {
    console.log(await exerc5(await getSubscribers02()))
})()