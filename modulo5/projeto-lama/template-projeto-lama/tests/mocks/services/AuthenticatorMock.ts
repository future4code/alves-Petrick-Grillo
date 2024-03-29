import { USER_ROLES } from "../../../src/models/User"
import { ITokenPayload } from "../../../src/services/Authenticator"

export class AuthenticatorMock {
    generateToken = (payload: ITokenPayload): string => {
        switch(payload.id) {
            case "101":
                return "token-admin"
            default:
                return "token-mock-normal"
        }
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        switch(token) {
            case "token-mock-normal":
                return {
                    id: "id-mock",
                    role: USER_ROLES.NORMAL
                }
            case "token-admin":
                return {
                    id: "101",
                    role: USER_ROLES.ADMIN
                }
            default:
                return null
        }
    }
}