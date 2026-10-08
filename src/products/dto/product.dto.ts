import { Types } from 'mongoose';

export class ProductDto {
    name: string;
    description: string;
    code: string;
    quantity: number;
    price: number;
    priceWithDiscount: number;
    discount: number;
    image: string;
    enterpriseId: Types.ObjectId;
    categoryId: Types.ObjectId;
}