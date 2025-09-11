import { IsEmail, isNotEmpty, IsNotEmpty, Matches, MaxLength, minLength, MinLength } from "class-validator";

export class createUserDTO {
    @IsNotEmpty({ message: "O nome é obrigatório" }) 


    @MaxLength(50, { message: "Nome deve ter no máximo 50 caracteres" })
    name: string

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

