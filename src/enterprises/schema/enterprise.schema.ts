import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EnterpriseDocument = HydratedDocument<EnterpriseSchema>;

@Schema()
export class EnterpriseSchema {

    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    logo: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: false })
    cnpj: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

}

export const EnterpriseSchemaFactory = SchemaFactory.createForClass(EnterpriseSchema);