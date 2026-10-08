import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

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

    @IsNotEmpty()
    @IsNumber()
    priceWithDiscount: number;

    @IsOptional()
    @IsNumber()
    discount: number;

    @IsOptional()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    enterpriseId: string;

    @IsNotEmpty()
    @IsString()
    categoryId: string;

}