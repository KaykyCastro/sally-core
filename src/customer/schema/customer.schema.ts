import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class CustomerSchema {

    @Prop({ required: true })
    name: string;

    @Prop({ required: false, default: '' })
    address: string;

    @Prop({ required: false, default: '' })
    numberWithPrefix: string;

    @Prop({ required: true, default: 0 })
    debitValue: number;

    @Prop({ type: Types.ObjectId, ref: 'Enterprise', required: true, index: true })
    enterpriseId: Types.ObjectId;

}   

export const CustomerSchemaFactory = SchemaFactory.createForClass(CustomerSchema);