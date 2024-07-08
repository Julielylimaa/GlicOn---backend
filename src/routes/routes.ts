import { register } from "../http/controllers/register"
import { express } from "../server"
import { login } from "../http/controllers/login"
import { authMiddleware } from "../services/auth"
import { foodList } from "../http/controllers/foodList"
import { addNotes, notes } from "../http/controllers/notes"
import { finalCount } from "../http/controllers/count"

const routes = express.Router()


routes.post('/login', login)
routes.post('/register', register)

routes.use(authMiddleware)
routes.get('/food', foodList)
routes.post('/addnotes', addNotes)
routes.get('/notes', notes)
routes.post('/count', finalCount)

module.exports = routes

