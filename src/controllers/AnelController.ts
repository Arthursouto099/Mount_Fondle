import { Request, Response } from "express";
import { AnelServices } from "../services/AnelService";

const service = new AnelServices()

export class AnelController {

    public static async create(req: Request, res: Response){
            try{
        const anel = await service.createAnel(req.body)
        res.status(201).json(anel)
            }catch (err){
                console.log("Erro ao criar anel: " + err)
            }
    }

   public static async finId(req: Request, res: Response){
        try{
            const anel = await service.findId(Number(req.params.id))
            res.status(201).json(anel)
        }catch(err) {
            res.status(400).json({message: "erro ao buscar anel"})
            console.log("Erro ao buscar anel: " + err)
        }
    }

   public static async removeAnel(req: Request, res: Response){
        try{
             await service.removeAnel(Number(req.params.id))
            res.status(201).json({message: "anel removido"})
        }catch (err){
            res.status(404).json({message: "erro ao remover anel"})
        }
    }

}