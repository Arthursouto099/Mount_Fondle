import * as express from "express"


export type CustomRequest = express.Request & {userLogged?: { id?: number, email?: string}}