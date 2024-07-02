import { register } from "../http/controllers/register"
import { express } from "../server"
import { login } from "../http/controllers/login"
import { authMiddleware } from "../services/auth"
import { foodList } from "../http/controllers/foodList"
import { addNotes, notes } from "../http/controllers/notes"

const routes = express.Router()


routes.post('/login', login)
routes.post('/register', register)

routes.use(authMiddleware)
routes.get('/food', foodList)
routes.post('/addnotes', addNotes)
routes.post('/notes', notes)

module.exports = routes

