import Router from "express"
import CharacterController from "../../../controllers/CharacterController"
import { checkSchema } from "../../../middlewares/checkSchema"
import { attackCharacterInputs, createCharacterInputs, updateCharacterInputs } from "../../../schemas/character.schema"


const  characterRouter = Router()

characterRouter.post("/", checkSchema(createCharacterInputs) ,CharacterController.createCharacter )
characterRouter.patch("/damage", checkSchema(attackCharacterInputs), CharacterController.applyDamage)
characterRouter.put("/update", checkSchema(updateCharacterInputs), CharacterController.updateCharacter)

export default characterRouter