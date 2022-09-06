import axios from "axios";
import { baseURL } from "./baseURL";

// ### Exercicio 03)
// A) Não.
// B) Para que não apareça para o usuario o resultado Promie<any> e sim algo que o usuario possa entender
type user = {
	id: string;
	name: string;
	email: string;
}
// A) 
// const getSubscribers03 = async (): Promise<user> => {
//     const response = await axios.get(`${baseURL}/subscribers`)
//     return response.data;
// }
const getSubscribers0 = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    const users:user[] = response.data.map((res: user) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
    return users
  };
  (async () => {
    console.log(await getSubscribers0())
})()