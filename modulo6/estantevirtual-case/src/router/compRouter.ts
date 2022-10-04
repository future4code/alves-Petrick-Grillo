import { Router } from "express";
import { CompBusiness } from "../business/CompBusinees";
import { CompController } from "../controller/CompController";
import { CompDatabase } from "../database/CompDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const compRouter = Router()

const compController = new CompController(
    new CompBusiness(
        new CompDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()

    )
)
compRouter.post("/create", compController.createComp)
