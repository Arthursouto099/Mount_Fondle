import { NextFunction, Request, Response } from "express";



export default function GlobalErrorHandler(err: Error, req: Request, res: Response , next: NextFunction ) {
    if(err) {
        res.status(500).json({
            message: "Error",
            e: err.message,
            stack: err.stack,
            error: err.message
        })

        return
    }


    next()

    
}