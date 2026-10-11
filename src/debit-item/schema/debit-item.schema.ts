import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class DebitItemSchema {

    @Prop({ type: Types.ObjectId , ref: 'Product', required: true, index: true })
    productId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Debit', required: true, index: true })
    debitId: Types.ObjectId;

    @Prop({ required: true, min: 0 })
    unitPrice: number;

    @Prop({ required: true, min: 1 })
    quantity: number;

    @Prop({ required: true, min: 0 })
    total: number;
    
}