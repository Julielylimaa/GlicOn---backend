import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Food } from "./entity/Food"
import { Notes } from "./entity/Notes"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "db",
    synchronize: true,
    logging: false,
    entities: [User, Food, Notes],
    migrations: [/*...*/],
    migrationsTableName: "migrations",
    subscribers: [],
})


