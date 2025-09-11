import { Request, Response, NextFunction } from "express";
import { Payload, verifyToken } from "../utils/jwt";
import { CustomRequest } from "../types/customizedTypes";
import { email } from "zod";


export default function authMiddleware(req: CustomRequest, res: Response, next: NextFunction) {

    const header = req.headers.authorization

    const token = header?.split(" ")[1]

    if(!token) {
        res.status(401).json({message: "token não fornecido"})
        return
    }

    const payload = verifyToken(token) as Payload

    req.userLogged = payload
    next()

    
}