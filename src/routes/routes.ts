import { AppDataSource } from "../data-source"
import { User } from "../entity/User"
import { express } from "../server"
const routes = express.Router()

routes.post('/login', (req, res) => {
    const { email, password } = req.body
    res.send(email)
})


routes.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    const userRepository = AppDataSource.getRepository(User)
    const userExists = await userRepository.find({where: {email: email}})
    console.log(userExists)
    
    if (userExists.length > 0) {
        return res.status(400).json('Email já cadastrado')
    }

    const user = new User()
    user.name = name
    user.email = email
    user.password = password

    await userRepository.manager.save(user)

    res.status(201).json({ message: 'Usuário cadastrado com sucesso' })



})


module.exports = routes