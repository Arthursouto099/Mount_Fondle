import * as zod from "zod"



const createCharacterInputs = zod.object({
    name: zod.string().max(60),
    health: zod.number().max(500),
    attack: zod.number().max(60)
}).strict()




export type CreateCharacterInputs = zod.infer<typeof createCharacterInputs>