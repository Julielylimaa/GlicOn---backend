import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
import { expressjwt } from "express-jwt";
import  jwt  from "jsonwebtoken"
import bcrypt from 'bcrypt';


export async function login(req: Request, res: Response) {
    const { email, password } = req.body
    const userRepository = AppDataSource.getRepository(User)
    const userExists = await userRepository.findOneBy({ email })
    console.log(userExists)

    if (!userExists){
        return res.status(400).json('Email ou senha incorretos.')
    }

    const passwordHash = userExists.password

    const match = await bcrypt.compare(password, passwordHash)

    if(!match){
        return res.status(400).json('Email ou senha incorretos.')
    }

    //const token = jwt.sign()

    return res.status(201).json("Login realizado com sucesso!")
    

}