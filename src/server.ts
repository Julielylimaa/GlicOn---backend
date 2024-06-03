import { AppDataSource } from "./data-source"

export const express = require("express")
const routes = require ("./routes/routes")


const app = express()
AppDataSource.initialize()
app.use(express.json())
app.use(routes)

//

app.get('/', (req, res)=>{
    res.send('Hello World aaaa')
})


app.listen(3333)