import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Notes {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column('text')
    registro: string

    @Column('text')
    descricao: string

    @Column('float')
    glicemia: number

    @ManyToOne(() => User, (user) => user.notes)
    user: User
}