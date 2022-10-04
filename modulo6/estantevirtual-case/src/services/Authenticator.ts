import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()



export class Authenticator {
    generateToken = (payload: string): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return token
    }

    getTokenPayload = (token: string) => {
        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string
            )

            return payload
        } catch (error) {
            return null
        }
    }
}