import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { AppError } from "./errors/AppError"
import 'express-async-errors'
export const express = require("express")
const routes = require ("./routes/routes")
import jwt from 'jsonwebtoken'


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
    if (err instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: 'Token expirou' });
      } else if (err instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: 'Token inválido' });
      } else if (err instanceof SyntaxError) {
        return res.status(401).json({ message: 'Token inválido' });
      }
      return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err}`
    });

  
})
//



app.listen(3333)