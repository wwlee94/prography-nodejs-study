import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserValidation {

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string;
}