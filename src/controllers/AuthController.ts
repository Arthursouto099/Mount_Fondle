import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import { UserService } from "../services/AuthService";

const service = new UserService()

export class AuthController {

    static async register(req: Request, res: Response) {
        try {
            const user = await service.create(req.body)
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ message: e.message });
        }

    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const user = await service.findByEmail(email)
            if (!user) return res.status(404).json({ message: 'Usuario não encontrado' })

            const valid = await user.validatePassword(password)
            if (!valid) return res.status(401).json({ message: 'Senha invalida' })

            const safe: any = { ...user }
            delete safe.password

            const token = generateToken({ id: user.id, email: user.email })


            res.json({ user: safe, token })
        } catch (e: any) {
            res.status(400).json({ message: e.message })
        }
    }
}