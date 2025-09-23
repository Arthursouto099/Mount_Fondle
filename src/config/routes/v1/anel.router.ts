import Router from "express"
import { AnelController } from "../../../controllers/AnelController";


const routerAnel = Router();

routerAnel.post("/create", AnelController.create)
routerAnel.delete("/remove/:id", AnelController.removeAnel)
routerAnel.get("/rings/all", AnelController.findRings )
routerAnel.get("/buscar/:id", AnelController.finId)

export default routerAnel 
