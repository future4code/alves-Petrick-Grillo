import { tags } from "../database/migrations/data";
import { OutfitDatabase } from "../database/OutfitDatabase";
import { ParamsError } from "../errors/ParamsError";
import { Ids, IOutfitLinkInput, IOutfitRobesInputDB, IOutfitTagsDB, Outfits, Robes, Tags } from "../models/Outfit";
import { IdGenerator } from "../services/IdGenerator";

export class OutfitBusiness {
    constructor(
        private outfitDatabase: OutfitDatabase,
        private idGenerator: IdGenerator
    ) { }
    linkIds = async (input: IOutfitLinkInput) => {
        let { name, tags } = input

        if (!name || name.length < 3) {
            throw new ParamsError("Insira um nome valido!")
        }
        if (typeof name !== "string") {
            throw new ParamsError("Insira uma string!2")
        }

        // if (typeof tags !== "string") {
        //     throw new ParamsError("Insira uma string!1")
        // }
        const idRobe = this.idGenerator.generate()
        const robe = new Robes(
            idRobe,
            name
        )
        await this.outfitDatabase.createRobe(robe)
        // for (let i = 0; i < tags; i++) {
        //     const tag = new Tags(
        //         tags
        //     )
        const tags_exists = await this.outfitDatabase.getTags()


        for (let tag_name of tags) {
            const tag = new Tags(
                tag_name
            )
            if (!tags_exists.find(function (name_tag_exist) {
                return name_tag_exist === tag_name
            })) {
                await this.outfitDatabase.createTag(tag)
            }

            const verifyRobe = await this.outfitDatabase.getUniqueRobe(name)
            if (!verifyRobe) {
                throw new ParamsError("Roupa não encontrada")
            }
            const verifyTag = await this.outfitDatabase.getUniqueTag(tag_name)
            const ids = new Ids(
                verifyRobe.id,
                verifyTag.tags
            )
            await this.outfitDatabase.linkIds(ids)
        }


        const response = {
            message: "Roupas registradas cadastrada com sucesso!"
        }
        return response
    }
    signupRobe = async (input: IOutfitRobesInputDB) => {
        let { name } = input

        if (!name || name.length < 3) {
            throw new ParamsError("Insira um nome valido!")
        }
        if (typeof name !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        const idRobe = this.idGenerator.generate()
        const robe = new Robes(
            idRobe,
            name
        )
        await this.outfitDatabase.createRobe(robe)
        const response = {
            message: "Roupa cadastrada com sucesso!"
        }
        return response
    }
    signupTag = async (input: IOutfitTagsDB) => {
        let { tags } = input
        if (typeof tags !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        const tag = new Tags(
            tags
        )
        await this.outfitDatabase.createTag(tag)
        const response = {
            message: "TAG cadastrada com sucesso!"
        }
        return response
    }
    signupTaginespecifyRobe = async (input: IOutfitLinkInput) => {
        let { name, tags } = input

        if (!name || name.length < 3) {
            throw new ParamsError("Insira um nome valido!")
        }
        if (typeof name !== "string") {
            throw new ParamsError("Insira uma string!")
        }

        if (typeof tags !== "string") {
            throw new ParamsError("Insira uma string!")
        }
        const verifyRobe = await this.outfitDatabase.getUniqueRobe(name)
        if (!verifyRobe) {
            throw new ParamsError("Roupa não encontrada!")
        }
        const verifyTag = await this.outfitDatabase.getUniqueTag(tags)
        if (!verifyTag) {
            throw new ParamsError("TAG não encontrada!")
        }
        const ids = new Ids(
            verifyRobe.id,
            verifyTag.tags
        )
        await this.outfitDatabase.linkIds(ids)
        const response = {
            message: "Roupas registradas cadastrada com sucesso!"
        }
        return response
    }
    getTags = async () => {
        const tags = await this.outfitDatabase.getTags()
        return tags
    }
    getRobes = async () => {
        const robes = await this.outfitDatabase.getRobes()
        return robes
    }
    getOutfits = async () => {
        const robes = await this.outfitDatabase.getRobes()
        const response = []
        for (let robe of robes) {
            const id = new Outfits(
                robe.id,
                robe.name
            )
            const Idslink = await this.outfitDatabase.getIdsLinked(id.getId())
            const id_tags = Idslink.map((parametro) => {
                return parametro.id_tags
            })
            id.setTags(id_tags)
            response.push({
                id: id.getId(),
                name: id.getName(),
                tags: id.getTags()
            })
        }
        return response
    }

}
// for (let tag_name of tags) {
//     const tag = new Tags(
//         tag_name
//     )