import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ timestamps: true})
export class ProductSchema {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    code: string;

    @Prop({ required: true })
    quantity: number;

    @Prop({ required: true })
    price: number;

    @Prop({ required: false })
    priceWithDiscount: number;

    @Prop({ required: false })
    discountPercentage: number;

    @Prop({ required: false })
    image: string;

    @Prop({ type: Types.ObjectId, ref: 'Enterprise', required: true, index: true })
    enterpriseId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: 'Category', required: true, index: true })
    categoryId: Types.ObjectId;

}

export const ProductSchemaFactory = SchemaFactory.createForClass(ProductSchema);