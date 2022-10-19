export interface IOutfitRobesDB {
    id: string
    name: string
}
export interface IOutfitRobesInputDB {
    name: string
}
export interface IOutfitTagsDB {
    tags: string
}

export interface IOutfitIdsDB {
    id_tags: string
    id_robes: string
}
export interface IOutfitLinkInput {
    name: string,
    tags: string[]
}
export interface IOutfits {
    id: string,
    name: string,
    tags: string[]
}
export class Outfits {
    constructor(
        private id: string,
        private name: string,
        private tags: string[] = []
    ) { }
    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }
    public getTags = () => {
        return this.tags
    }
    public setId = (newId: string) => {
        this.id = newId
    }
    public setName = (newName: string) => {
        this.name = newName
    }
    public setTags = (newTags: string[]) => {
        this.tags = newTags
    }
}
export class Robes {
    constructor(
        private id: string,
        private name: string
    ) { }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }
    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }
}

export class Tags {
    constructor(
        private tags: string
    ) { }
    public getTag = () => {
        return this.tags
    }
    public setTag = (newTag: string) => {
        this.tags = newTag
    }
}

export class Ids {
    constructor(
        private id_robes: string,
        private id_tags: string
    ) { }
    public getId_Robes = () => {
        return this.id_robes
    }
    public getId_Tags = () => {
        return this.id_tags
    }
    public setId_Robes = (newId_Robes: string) => {
        this.id_robes = newId_Robes
    }
    public setId_Tags = (newId_Tags: string) => {
        this.id_tags = newId_Tags
    }
}