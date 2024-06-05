import { register } from "../http/controllers/register"
import { AppDataSource } from "../data-source"
import { User } from "../entity/User"
import { express } from "../server"
import { getProfile, login } from "../http/controllers/login"
const routes = express.Router()


routes.post('/login', login)
routes.post('/register', register)
routes.get('/profile', getProfile)
module.exports = routes