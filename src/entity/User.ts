import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column('text')
    email: string 

    @Column('text')
    name: string

    @Column('text')
    password: string

}
