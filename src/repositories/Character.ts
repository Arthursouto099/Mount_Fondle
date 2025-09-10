import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity("character")
export default class Character {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ length: 60, nullable: false })
    name: string
    @Column({ nullable: false, default: 100 })
    health: number
    @Column({ nullable: false, default: 0 })
    attack: number

    constructor(name: string, health?: number, attack?: number) {
        this.name = name
        if (health !== undefined) this.health = health
        if (attack !== undefined) this.attack = attack
    }
}



