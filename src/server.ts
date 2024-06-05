import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { AppError } from "./errors/AppError"
import 'express-async-errors'
export const express = require("express")
const routes = require ("./routes/routes")


const app = express()
AppDataSource.initialize()
app.use(express.json())
app.use(routes)

app.use((err:Error, req: Request, res: Response, next: NextFunction ) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})
//

app.get('/', (req, res)=>{
    res.send('Hello World aaaa')
})


app.listen(3333)