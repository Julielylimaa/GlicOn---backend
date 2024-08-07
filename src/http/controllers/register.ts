import { Request, Response, request, response } from "express"
import { hash } from "bcrypt"
import { AppDataSource } from "../../data-source"
import { User } from "../../entity/User"


export async function register(req: Request, res: Response) {
    const { name, email, password } = req.body
    try {
        const userRepository = AppDataSource.getRepository(User)
        const userExists = await userRepository.findOneBy({ email })

        if (userExists) {
            return res.status(400).json('Email já cadastrado')
        }

        const passwordHash = await hash(password, 8)

        const user = new User()
        user.name = name
        user.email = email
        user.password = passwordHash

        await userRepository.manager.save(user)

        res.status(201).json({ message: 'Usuário cadastrado com sucesso' })
    } catch (error) {
        return res.status(401).json({ message: 'Não foi possível fazer novo cadastro.' })
    }


}