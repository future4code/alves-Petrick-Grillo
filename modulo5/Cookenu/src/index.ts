import app from "./app";
import ControllerUser from "./endpoints/User";


const controllerUser = new ControllerUser()

app.post("/signup", controllerUser.signupUser)

app.post("/login", controllerUser.loginUser)

app.get("/user/profile", controllerUser.getUserbyToken)

app.get("/user/:id", controllerUser.getAnotherUserById)

app.post("/recipe", controllerUser.createRecipe)

app.get("/recipe/:id", controllerUser.getRecipeById)