import { register } from "../http/controllers/register"
import { AppDataSource } from "../data-source"
import { User } from "../entity/User"
import { express } from "../server"
import { login } from "../http/controllers/login"
const routes = express.Router()


routes.post('/login', login)
routes.post('/register', register)

module.exports = routes