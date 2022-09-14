import * as jwt from "jsonwebtoken";
import dotenv from "dotenv"

const expiresIn = "1min";

dotenv.config()
class GenerateToken {

    generateToken(id: string) {

        const token = jwt.sign(
            {
                id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        );

        return token
    }

    verifyToken(token: string) {

        const verify = jwt.verify(token, process.env.JWT_KEY as string) as any

        return verify.id
    }
}

export default GenerateToken