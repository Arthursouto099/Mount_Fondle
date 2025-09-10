import { AppDataSource } from "../config/data-source";
import Character from "../repositories/Character";
import { CreateCharacterInputs, UpdateCharacterInput } from "../schemas/character.schema";




export default class CharacterService {
    static characterRepository = AppDataSource.getRepository(Character)

    public static async createCharacter(data: CreateCharacterInputs): Promise<Character> {
        const appCharacterData = this.characterRepository.create(data)
        return await this.characterRepository.save(appCharacterData)
    }


    public static async applyDamage(id: number, damage: number): Promise<Character> {
        const character = await this.characterRepository.findOneBy({ id })

        if (!character) throw new Error("Personagem não encontrado!")

        const newHealth = Math.max(character.health - damage)
        character.health = newHealth

        return await this.characterRepository.save(character)
    }


    public static async updateCharacter(id: number, data: UpdateCharacterInput) {
        const character = await this.characterRepository.findOneBy({ id })
        if (!character) throw new Error("Personagem não encontrado!")
        
        Object.assign(character, {
            ...data,
        })

        return await this.characterRepository.save(character)
    }

    public static async findCharacterById(id: number) {
        return await this.characterRepository.findOneBy({id}) ?? null
    }





} 