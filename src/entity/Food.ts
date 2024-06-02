import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Food {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column('text')
    name: string 

    @Column('text')
    usualMeasure: string;

    @Column('float')
    carbs: number;

}