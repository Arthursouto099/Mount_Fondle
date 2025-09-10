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

    async update(id: number, data: Partial<User>) {
        const user = await this.repo.findOne({ where: { id } })

        if (!user) throw new Error('Usuario não encontrado');

        if (data.password) {
            user.password = data.password;
        }
        const { password, ...rest } = data
        Object.assign(user, rest)
        return await this.repo.save(user)
    }

    async remove(id: number) {
        const user = await this.repo.findOne({ where: { id } })
        if (!user) throw new Error("usuario não encontrado")

        await this.repo.remove(user)

        return { message: 'usuario removido' }
    }
    async findByEmail(email: string) {
        return this.repo.findOne({ where: { email } })
    }
}