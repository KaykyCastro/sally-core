import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class CategorySchema {

    @Prop({ required: true })
    name: string;

    @Prop({ type: Types.ObjectId, ref: 'Enterprise', required: true, index: true })
    enterpriseId: Types.ObjectId;

}

export const CategorySchemaFactory = SchemaFactory.createForClass(CategorySchema);