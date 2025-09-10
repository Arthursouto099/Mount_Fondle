import { Request, Response } from "express";
import { generateToken } from "../utils/jwt";

export class AuthController {


    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

        }
    }
}