import { Router } from "express";

const routerApp = Router()

routerApp.get("/ping", (req,res) => {
    res.json({message: "pong"})
})


export default routerApp