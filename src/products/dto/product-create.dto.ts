import { IsNotEmpty, IsString, IsNumber, IsOptional, IsMongoId } from 'class-validator';

export class ProductCreateDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    code: string;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsOptional()
    @IsNumber()
    discountPercentage: number;

    @IsOptional()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsMongoId()
    enterpriseId: string;

    @IsNotEmpty()
    @IsMongoId()
    categoryId: string;

}