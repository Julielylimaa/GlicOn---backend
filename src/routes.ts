import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { express } from "./server"
const routes = express.Router()

routes.post('/login', (req, res) => {
    const { email, password } = req.body
    res.send(email)
})


routes.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    const user = new User()
    user.name = name
    user.email = email
    user.password = password

    console.log(user)
    AppDataSource.initialize().then(async () => {
        const userRepository = AppDataSource.getRepository(User)
        
        
        console.log(user)
        await userRepository.manager.save(user)

        res.status(201).json({message: 'Usuário cadastrado com sucesso'})

    }).catch(error => console.log(error))

    

})


module.exports = routes