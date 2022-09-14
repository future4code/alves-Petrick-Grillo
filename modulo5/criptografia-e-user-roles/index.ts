import ControllerUser from "../criptografia-e-user-roles/endpoints/User";
import app from "./app";

const controllerUser = new ControllerUser()

app.post("/user/signup", controllerUser.insertUser)

app.post("/user/login", controllerUser.loginUser)

app.get("/user/profile", controllerUser.getUserbyToken)