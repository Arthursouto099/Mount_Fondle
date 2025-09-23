import Router from "express"
import CharacterController from "../../../controllers/CharacterController"
import { checkSchema } from "../../../middlewares/checkSchema"
import { attackCharacterInputs, createCharacterInputs, updateCharacterInputs } from "../../../schemas/character.schema"


const  characterRouter = Router()

characterRouter.post("/", checkSchema(createCharacterInputs) ,CharacterController.createCharacter )
characterRouter.patch("/damage/:id", checkSchema(attackCharacterInputs), CharacterController.applyDamage)
characterRouter.put("/update/:id", checkSchema(updateCharacterInputs), CharacterController.updateCharacter)
characterRouter.get("/:id", CharacterController.findCharacter)


export default characterRouter