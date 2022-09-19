import * as jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

class GetData {

    getData = (token: string): any => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
        };
        return result;
    };

}
export default GetData