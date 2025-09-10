import CharacterService from "../services/Character";
import { Request, Response } from "express";


export default class AuthController {
    public async createCharacter(req: Request, res: Response) {
        try{
            const data = await CharacterService.createCharacter(req.body)
        }
        catch(e){

        }
    }
}