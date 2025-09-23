import { NumberSchema } from "zod/v4/core/json-schema.cjs";
import { AppDataSource } from "../config/data-source";
import {AnelHistory} from "../repositories/AnelHistory"
import { da, id, th } from "zod/v4/locales/index.cjs";


// Guilherme misturou ingles com portugues// APENAS SEGUI O PADRÂO

export class AnelServices{
    private anelRepository = AppDataSource.getRepository(AnelHistory)

    async createAnel(data: {name: string, descricao: string, quantidade: number} ){
        const anelExistente = await this.anelRepository.findOneBy({name: data.name, descricao: data.descricao})


        if(!anelExistente) {
            const anel = this.anelRepository.create(data)
            return await this.anelRepository.save(anel)
        }

        anelExistente.quantidade += 1
        return await this.anelRepository.save(anelExistente)

    }

    async findAllRings(){
        return await this.anelRepository.find() ??  []

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