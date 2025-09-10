import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity("character")
export default class Character {
    @PrimaryGeneratedColumn()
    private id: number
    @Column({length: 60, nullable: false})
    private name: string
    @Column({ nullable: false, default: 100})
    private health: number
    @Column({nullable: false, default: 0})
    private attack: number
}



