import axios from "axios";
import { baseURL } from "./baseURL";

// ### Exercicio 04)
// A) Put, pois ja existe um objeto esperando essas informações, post é para quando nao existe nada.
// B)
const createNews = async (title: string, content: string, date: number): Promise<void> => {
    await axios.put(`${baseURL}/news`, {
        title: title,
        content: content,
        date: date
    });
}
// async function createNew4s(
//     title: string,
//     content: string,
//     date: number
// ): Promise<void> {
//     await axios.put(`${baseURL}/news`, {
//         title: title,
//         content: content,
//         date: date
//     });
// }
(async () => {
    console.log(await createNews("Titulo super interessante", "Conteudo Ainda mais interessante",1589818936000))
})()