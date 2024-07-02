import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";
import jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';


dotenv.config()


export async function login(req: Request, res: Response) {
    const { email, password } = req.body
    const userRepository = AppDataSource.getRepository(User)
    const userExists = await userRepository.findOneBy({ email })

    if (!userExists) {
        return res.status(400).json('Email ou senha incorretos.')
    }

    const passwordHash = userExists.password

    const match = await bcrypt.compare(password, passwordHash)

    if (!match) {
        return res.status(400).json('Email ou senha incorretos.')
    }



    const token = jwt.sign({ id: userExists.id }, process.env.JWT_PASS, { expiresIn: '1d' })

    const { password: _, ...userLogin } = userExists

    return res.status(201).json({
        user: userLogin,
        token: token,
    })

}

export async function getProfile(req: Request, res: Response) {
    return res.status(201).json(req.user)
} 