import { Router } from "express";
import characterRouter from "./v1/character.router";

const routerApp = Router()

routerApp.get("/ping", (req,res) => {
    res.json({message: "pong"})
})


routerApp.use("/character", characterRouter)

export default routerApp