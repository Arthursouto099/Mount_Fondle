import { AppDataSource } from "../config/data-source";
import { User } from "../repositories/User";

export class UserService {
    private repo = AppDataSource.getRepository(User);

    async create(data: { email: string; password: string }) {
        const exists = await this.repo.findOne({ where: { email: data.email } })
        if (exists) throw new Error('Usuario cadastrado com sucesso')
        const user = this.repo.create(data)
        return await this.repo.save(user);
    }

    async findAll() {
        const users = await this.repo.find();

        return users.map(u => {
            const clone: any = { ...u }

            delete clone.password

            return clone
        })
    }


    async findbyId(id: number) {
        const user = await this.repo.findOne({ where: { id } })

        if (!user) throw new Error('Usuario não encontrado')

        const clone: any = { ...user }

        delete clone.password

        return clone
    }

    async update(id:number, data:Partial<User>){
        const user = await this.repo.findOne({where: {id}})

        if(!user) throw new Error
    }
}