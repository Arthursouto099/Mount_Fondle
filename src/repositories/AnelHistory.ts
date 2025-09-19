import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity("anelHistory")
export  class AnelHistory{
     @PrimaryGeneratedColumn()
     id: number

     @Column({ length: 60, nullable: false })
     name: string

     @Column({ length: 200, nullable: false })
     descricao: string

     @Column({nullable: false })
     quantidade: number
}