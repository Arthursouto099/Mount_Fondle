import { Router } from "express";
import characterRouter from "./v1/character.router";
import UserRouter from "../routes/auth.routes"

const routerApp = Router()

routerApp.get("/ping", (req,res) => {
    res.json({message: "pong"})
})


routerApp.use("/character", characterRouter)
routerApp.use("/auth", UserRouter )

export default routerApp