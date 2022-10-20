import { Router } from "express";
import { OutfitBusiness } from "../businees/OutfitBusiness";
import { OutfitController } from "../controller/OutfitController";
import { OutfitDatabase } from "../database/OutfitDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const outfitRouter = Router()

const outfitController = new OutfitController(
    new OutfitBusiness(
        new OutfitDatabase(),
        new IdGenerator()
    )
)
outfitRouter.post("/sign", outfitController.linkIds)
outfitRouter.post("/tag", outfitController.signupTag)
outfitRouter.post("/signout", outfitController.signupRobe)
outfitRouter.post("/link", outfitController.signupTaginEspecifyRobe)
outfitRouter.get("/tags", outfitController.getTags)
outfitRouter.get("/robes", outfitController.getRobes)
outfitRouter.get("/", outfitController.getOutfits)