import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class ProductUpdateDto {

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
    priceWithDiscount: number;

    @IsOptional()
    @IsNumber()
    discount: number;

    @IsOptional()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    enterpriseId: Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    categoryId: Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    updatedAt: Date;

}
