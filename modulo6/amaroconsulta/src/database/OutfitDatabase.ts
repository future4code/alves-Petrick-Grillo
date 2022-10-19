import { Ids, IOutfitIdsDB, IOutfitRobesDB, IOutfits, IOutfitTagsDB, Robes, Tags } from "../models/Outfit";
import { BaseDatabase } from "./BaseDatabase";

export class OutfitDatabase extends BaseDatabase {
    public static OutFit_Robes = "OutFit_Robes"
    public static OutFit_Tags = "OutFit_Tags"
    public static OutFit_Ids = "OutFit_Ids"

    public toOutfitDBModel = (robes: Robes): IOutfitRobesDB => {
        const robesDB: IOutfitRobesDB = {
            id: robes.getId(),
            name: robes.getName()
        }
        return robesDB
    }
    public toTagDBModel = (tag: Tags): IOutfitTagsDB => {
        const tagsDB: IOutfitTagsDB = {
            tags: tag.getTag()
        }
        return tagsDB
    }
    public toIdsDBModel = (ids: Ids): IOutfitIdsDB => {
        const idsDB: IOutfitIdsDB = {
            id_tags: ids.getId_Tags(),
            id_robes: ids.getId_Robes()
        }
        return idsDB
    }

    public createRobe = async (robes: Robes): Promise<void> => {
        const robesDB = this.toOutfitDBModel(robes)
        await BaseDatabase
            .connection(OutfitDatabase.OutFit_Robes)
            .insert(robesDB)
    }
    public getUniqueRobe = async (name: string): Promise<IOutfitRobesDB | undefined> => {
        const result: IOutfitRobesDB[] = await BaseDatabase.connection()
            .select("*")
            .from(OutfitDatabase.OutFit_Robes)
            .where({ name })
        return result[0]
    }
    public getRobes = async (): Promise<IOutfitRobesDB[] | undefined> => {
        const result: IOutfitRobesDB[] = await BaseDatabase.connection()
            .select("*")
            .from(OutfitDatabase.OutFit_Robes)
        const showRobes = result.map((robe) => {
            return ({
                id: robe.id,
                name: robe.name
            })
        })
        return showRobes
    }
    public createTag = async (tag: Tags): Promise<void> => {
        const tagsDB = this.toTagDBModel(tag)
        await BaseDatabase
            .connection(OutfitDatabase.OutFit_Tags)
            .insert(tagsDB)
    }
    public getUniqueTag = async (tags: string): Promise<IOutfitTagsDB | undefined> => {
        const result: IOutfitTagsDB[] = await BaseDatabase.connection()
            .select("*")
            .from(OutfitDatabase.OutFit_Tags)
            .where({ tags })
        return result[0]
    }
    public getTags = async (): Promise<string[] | undefined> => {
        const result: IOutfitTagsDB[] = await BaseDatabase.connection()
            .select("*")
            .from(OutfitDatabase.OutFit_Tags)
        const showTags = result.map((tag) => {
            return tag.tags
        })
        return showTags
    }
    public linkIds = async (ids: Ids): Promise<void> => {
        const idsDB = this.toIdsDBModel(ids)
        await BaseDatabase
            .connection(OutfitDatabase.OutFit_Ids)
            .insert(idsDB)
    }
    public getIdsLinked = async (id_robes: string): Promise<IOutfitIdsDB[] | undefined> => {
        const result: IOutfitIdsDB[] = await BaseDatabase.connection()
            .select("*")
            .from(OutfitDatabase.OutFit_Ids)
            .where({ id_robes })
        return result
    }
}