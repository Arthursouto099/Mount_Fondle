
import 'reflect-metadata'
import "dotenv/config"


import {DataSource} from "typeorm"
import Character from '../repositories/Character';
import { User } from '../repositories/User';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;


export const AppDataSource = new DataSource({
    type: "mysql",
    port: Number(DB_PORT || 3306),
    username: DB_USER,
    password: DB_PASSWORD ?? "root",
    database: DB_NAME,
    host: DB_HOST,
    // somente em desenvolvimento, somente cria as tabelas automaticamente
    synchronize: true,
    logging: true,

    // entidades para criar o mapeamento
    entities: [Character, User]
})