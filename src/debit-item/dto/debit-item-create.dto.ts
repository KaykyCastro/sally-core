
import { IsNotEmpty, IsNumber, IsMongoId, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class DebitItemCreateDto {

    @IsNotEmpty()
    @IsNumber()
    unitPrice: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsMongoId()
    productId: string;

    @IsNotEmpty()
    @IsMongoId()
    debitId: string;

}