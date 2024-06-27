import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { AppError } from "../errors/AppError";



type JwtPayload = {
    id: string,
}

export async function authMiddleware(req:Request, res: Response, next: NextFunction) {
    
    const { authorization } = req.headers

    if(!authorization){
        throw new AppError('invalid signature', 401)
    }
    const token = authorization.split(' ')[1]
    const { id } = jwt.verify(token, process.env.JWT_PASS) as JwtPayload
    //dar try catch here
    const userRepository = AppDataSource.getRepository(User)
    const userExists = await userRepository.findOneBy({ id })
    
    if (!userExists){
        throw new AppError('invalid signature', 403)
    }

    const { password: _, ...loggedUser} = userExists
    req.user = loggedUser
    
    next()
}