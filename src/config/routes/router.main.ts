import { Router } from "express";
import characterRouter from "./v1/character.router";
import UserRouter from "../routes/auth.routes"
import routerAnel from "./v1/anel.router";
import authMiddleware from "../../middlewares/AuthMiddleware";

const routerApp = Router()

routerApp.get("/ping", (req,res) => {
    res.json({message: "pong"})
})


routerApp.use("/character", authMiddleware, characterRouter)
routerApp.use("/auth", UserRouter )
routerApp.use("/anel", routerAnel)

export default routerApp