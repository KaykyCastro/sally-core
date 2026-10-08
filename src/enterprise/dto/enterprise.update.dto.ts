import { IsEmail, IsOptional, IsString, isNotEmpty, IsNotEmpty } from 'class-validator';

export class EnterpriseUpdateDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsOptional()
    logo: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    cnpj: string;

    @IsNotEmpty()
    createdAt: Date;

    @IsNotEmpty()
    updatedAt: Date;

}