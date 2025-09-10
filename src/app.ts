import "reflect-metadata"
import express, { type Application } from "express"
import "dotenv/config"
import { AppDataSource } from "./config/data-source"
import routerApp from "./config/routes/router.main"
import GlobalErrorHandler from "./middlewares/GlobalErrorHandler"


const app: Application = express()
const port: number = Number(process.env.PORT) ?? 3307



app.use(express.json())
app.use(routerApp)
app.use(GlobalErrorHandler)


AppDataSource.initialize()
.then((data) => {
    console.log("Conectado com o banco de dados! ")
    

    app.listen(port, (er ) => {
        if(er) return console.log("Erro ao iniciar o servidor: " + er.stack)
        console.log("Running in localhost://" + port + "")
        
    })

})
.catch((e) => {
    console.log("Erro ao iniciar conexão com o banco de dados: " + e )
} )