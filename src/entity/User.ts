import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Notes } from "./Notes"

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

    @OneToMany(() => Notes, (note) => note.user)
    notes: Notes[]

}
