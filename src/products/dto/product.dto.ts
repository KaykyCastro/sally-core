import { Types } from 'mongoose';

export class ProductDto {
    _id: string;
    name: string;
    description: string;
    code: string;
    quantity: number;
    price: number;
    priceWithDiscount: number;
    discountPercentage: number;
    image: string;
    enterpriseId: Types.ObjectId;
    categoryId: Types.ObjectId;
}