import { IOutfitDB } from "../../models/Outfit";
import { IdGenerator } from "../../services/IdGenerator";

export const outfits: IOutfitDB[] = [
    {
        id: "8371",
        name: "VESTIDO TRICOT CHEVRON",
    },
    {
        id: "8367",
        name: "VESTIDO MOLETOM COM CAPUZ MESCLA",
    }
]
export const tags = [
    {
        tags: "balada"
    },
    {
        tags: "neutro"
    },
    {
        tags: "delicado"
    },
    {
        tags: "festa"
    },
    {
        tags: "casual"
    },
    {
        tags: "metal"
    }
]
export const products_Tags = [
    {
        id_robes: "8371",
        id_tags: "balada"
    },
    {
        id_robes: "8371",
        id_tags: "neutro"
    },
    {
        id_robes: "8371",
        id_tags: "delicado"
    },
    {
        id_robes: "8371",
        id_tags: "festa"
    },
    {
        id_robes: "8367",
        id_tags: "casual"
    },
    {
        id_robes: "8367",
        id_tags: "metal"
    }
]

// const removeDuplicate = outfits.map((parametro) => {
//     return parametro.tags
// })
// export const teste = outfits.map((parametro) => {
//     return ({
//         id: parametro.id,
//         name: parametro.name
//     })
// })
// const testeRemo = [... new Set(removeDuplicate.flat(Infinity))]
// export const testeReduce = testeRemo.map((parametro) => {
//     return ({
//         tags: parametro
//     })
// })
// console.log(testeReduce)
// console.log([... new Set(removeDuplicate.flat(Infinity))])
/* for para percorrrer o array de outfits/arrayoriginal
se existir a tag compativel add no
*/
// const linkIds = outfits.map((parametro) => {
//     let verifyTag = []
//     // if (parametro.tags === testeRemo) {

//     // }
//     for(let i = outfits.map((parametro)=>{return parametro.tags}); i ===  ;){

//     }
// })
// for (let i = 0; i < outfits.length; i++) {
//     console.log("posição: ", i)
//     for (let j = 0; j < outfits[i].tags.length; j++) {
//         console.log(outfits[j].tags)
//     }

// }