import { NumberSchema } from "zod/v4/core/json-schema.cjs";
import { AppDataSource } from "../config/data-source";
import {AnelHistory} from "../repositories/AnelHistory"
import { id, th } from "zod/v4/locales/index.cjs";

export class AnelServices{
    private anelRepository = AppDataSource.getRepository(AnelHistory)

    async createAnel(data: {name: string, descricao: string, quantidade: number} ){
        const anelVerifiction = data
        if(!anelVerifiction) throw new Error('anel não pode ser invalido');

        const anel = this.anelRepository.create(anelVerifiction)
        return await this.anelRepository.save(anel)
    }

    async findId(id: number){
        const anel =  await this.anelRepository.findOne({where: {id}})

        if(!anel) throw new Error("anel não encontrado")

            const clone: any = {...anel}

        return clone
    }

    async removeAnel(id: number){
        const anel = await this.anelRepository.findOneBy({id});
        if(!anel) throw new Error("Erro ao remover o anel")
     await this.anelRepository.remove(anel)
        return { message: "anel removido"}
    }
}