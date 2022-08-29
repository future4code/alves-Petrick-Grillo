// ### EXERCICIO 06
// A) Promisse.all é uma especie de função no qual se
//  passa os parametros todas as promisses do codigo, com a intuição de retornar uma unica promisse.
// B) A vantagem seria de ter mais controle de envio as usuarios e
//  manutenção do codigo mais facil e rapida
// C)
import axios from "axios";
import { baseURL } from "./baseURL";
type user = {
	id: string;
	name: string;
	email: string;
}
const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };
(async () => {
    console.log(sendNotifications)
})()