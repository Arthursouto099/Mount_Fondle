import { success } from "zod";
import CharacterService from "../services/Character";
import { Request, Response } from "express";


export default class CharacterController {
    public static async createCharacter(req: Request, res: Response) {

        const data = await CharacterService.createCharacter(req.body)
        res.status(201).json({ message: "Personagem criado com sucesso", data, success: true })
    }

    public static async findCharacterById(req: Request, res: Response) {
        if(req.params.id) res.status(401).json({message: "Parametro id não fornecido"})
        const data = await CharacterService.findCharacterById(parseInt(req.params.id))
        res.status(200).json({data: data})
    }

    public static async applyDamage(req: Request, res: Response) {
        const damaged = await CharacterService.applyDamage(Number(req.params.id), req.body.damage)
        res.status(200).json({message: "Dano aplicado ao inimigo", data: damaged, success: true})
    }

    public static async updateCharacter(req: Request, res: Response) {
        const updated = await CharacterService.updateCharacter(Number(req.params.id), req.body)
        res.status(201).json({ message: "Personagem editado com sucesso", data: updated, success: true })
    }

     public static async findCharacter(req: Request, res: Response) {
        const find = await CharacterService.findCharacterById(Number(req.params.id ?? 0))
        res.status(200).json({ message: "Personagem encontrado com sucesso", data: find, success: true })
    }
}