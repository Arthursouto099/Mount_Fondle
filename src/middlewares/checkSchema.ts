import { error } from "console";
import { NextFunction, Response, Request } from "express";
import { ZodObject} from "zod";

export function checkSchema(zodSchema: ZodObject<any> ) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = zodSchema.safeParse(req.body)

        if(result.error) {
            res.status(400).json({
                message: "Erro de validação!",
                errors: result.error.issues
            })
            return
        }

        req.body = result.data
        next()

    }
}