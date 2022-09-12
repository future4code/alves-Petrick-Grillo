import ControllerUser from "../endpoints/User";
import app from "./app";

const controllerUser = new ControllerUser()

app.post("/user/signup", controllerUser.insertUser)

app.post("/user/login", controllerUser.searchUser)

app.get("/user/profile", controllerUser.getUserbyToken)
