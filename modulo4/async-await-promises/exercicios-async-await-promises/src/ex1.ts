import axios from "axios";
import { baseURL } from "./baseURL";

// ### Exercicio 01)
// A) .get
// B) Caso não sabemos o que pode nos retornar, tipamos com <any>, 
// como ira retorna uma string chamada "array de qualquer coisa" tipamos como string
// C)
const getSubscribers = async () => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response;
}
(async () => {
    console.log(await getSubscribers())
})()
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
// ### Exercicio 03)
// A) Sim, faltando passar os bodys de id, name e email.
// B) Para que não apareça para o usuario o resultado Promie<any> e sim algo que o usuario possa entender
type user = {
	id: string;
	name: string;
	email: string;
}
// A) const getSubscribers03 = async (): Promise<user> => {
//     const response = await axios.get(`${baseURL}/subscribers`)
//     return response;
// }
const getSubscribers03 = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };
  (async () => {
    console.log(await getSubscribers03())
})()