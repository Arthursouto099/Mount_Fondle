import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from "typeorm";
import bcrypt from "bcrypt";


@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 160 })
    email: string

    @Column()
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (!this.password.startsWith('$2')) {
            const rounds = Number(process.env.BCRYPT_SALT_ROUNDS)

            this.password = await bcrypt.hash(this.password, rounds);

        }
    }

    async validatePassword(plain: string): Promise<boolean> {
        return bcrypt.compare(plain, this.password)
    }

}


