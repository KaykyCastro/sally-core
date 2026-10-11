import { IsNotEmpty, IsOptional, IsString, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CustomerCreateDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    numberWithPrefix: string;

    @IsNotEmpty()
    @IsMongoId()
    enterpriseId: string;

}