import { IsNotEmpty, IsNumber, IsOptional, IsString, IsMongoId } from 'class-validator';

export class DebitCreateDto {

    @IsNotEmpty()
    @IsNumber()
    total: number;

    @IsNotEmpty()
    @IsMongoId()
    customerId: string;

    @IsNotEmpty()
    @IsMongoId()
    productsId: string[];
    

}