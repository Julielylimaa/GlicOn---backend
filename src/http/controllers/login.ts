import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

const bcrypt = require('bcrypt')


export async function login(req: Request, res: Response) {
    const { email, password } = req.body
    const userRepository = AppDataSource.getRepository(User)
    const userExists = await userRepository.find({
        where: {
            email: email,
        },
    })
    console.log(userExists)

    if (userExists.length == 0) {
        return res.status(400).json('Email ou senha incorretos.')
    }

    const passwordHash = userExists[0].password

    const match = await bcrypt.compare(password, passwordHash)

    if(!match){
        return res.status(400).json('Email ou senha incorretos.')
    }


    return res.status(201).json("Login realizado com sucesso!")
    

}