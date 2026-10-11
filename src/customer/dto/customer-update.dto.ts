import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CustomerUpdateDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    numberWithPrefix: string;

}
