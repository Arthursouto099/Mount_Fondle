import { IsEmail, isNotEmpty, IsNotEmpty, Matches, MaxLength, minLength, MinLength } from "class-validator";
import { calculateObjectSize } from "typeorm/driver/mongodb/bson.typings";


export class userLogin {

    @IsEmail({}, {message: "E-mail invalido"})
    @MaxLength(100, {message: "E-mail deve ter no maximo 100 caracteres"})
    email: string

    @MinLength(6, {message: "senha deve conter no minimo 6 caracteres"})
    @Matches(/(?=.*[a-z])/, { message: "Senha deve conter pelo menos uma letra minúscula" })
    @Matches(/(?=.*[A-Z])/, { message: "Senha deve conter pelo menos uma letra maiúscula" })
    @Matches(/(?=.*\d)/, { message: "Senha deve conter pelo menos um número" })
    @Matches(/(?=.*[@$!%*?&])/, { message: "Senha deve conter pelo menos um caractere especial (@$!%*?&)" })
    password: string
}