import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import { UserService } from "../services/AuthService";

const service = new UserService()

export class AuthController {

    async register(req: Request, res: Response) {
        try {
            const user = await service.create(req.body)
            const token = generateToken({ id: user.id, email: user.email })
            res.status(201).json({data: user, token: token })
        } catch (e: any) {
            res.status(400).json({ message: e.message });
        }

    }

    async login(req: Request, res: Response) {
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