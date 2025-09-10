import * as zod from "zod"



export const createCharacterInputs = zod.object({
    name: zod.string().max(60),
    health: zod.number().max(500),
    attack: zod.number().max(60)
}).strict()


export const attackCharacterInputs = zod.object({
    damage: zod.number()
}).strict()

export const updateCharacterInputs = createCharacterInputs.partial()

export type CreateCharacterInputs = zod.infer<typeof createCharacterInputs>
export type AttackCharacterInput = zod.infer<typeof attackCharacterInputs>
export type UpdateCharacterInput = zod.infer<typeof updateCharacterInputs>