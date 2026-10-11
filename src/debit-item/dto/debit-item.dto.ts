import { Types } from 'mongoose';

export class DebitItemDto {
    unitPrice: number;
    quantity: number;
    total: number;
    productId: Types.ObjectId;
    debitId: Types.ObjectId;
}