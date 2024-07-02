import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, TimeSeriesCollectionOptions } from "typeorm"
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

    @Column({ type: 'time' })
    horario: string

    @ManyToOne(() => User, (user) => user.notes)
    user: User
    
}