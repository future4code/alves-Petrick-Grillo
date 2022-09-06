import axios from "axios";
import { baseURL } from "./baseURL";

// ### Exercicio 02)
// A) Ambos executam a mesma ordem, porem uma é mais facil de entender
// B)
const getSubscribers02 = async (): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response;
}
(async () => {
    console.log(await getSubscribers02())
})()