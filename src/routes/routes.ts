import { register } from "../http/controllers/register"
import { AppDataSource } from "../data-source"
import { User } from "../entity/User"
import { express } from "../server"
import { getProfile, login } from "../http/controllers/login"
import { authMiddleware } from "../services/auth"

const routes = express.Router()


routes.post('/login', login)
routes.post('/register', register)

routes.use(authMiddleware)
routes.get('/profile', getProfile)
routes.get('/testando', (req, res)=>{
    res.json("autenticado")
})
module.exports = routes