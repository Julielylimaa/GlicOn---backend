import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Food } from "./entity/Food"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "db",
    synchronize: false,
    logging: false,
    entities: [User, Food],
    migrations: [],
    subscribers: [],
})


