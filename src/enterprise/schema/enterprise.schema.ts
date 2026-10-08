import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EnterpriseDocument = HydratedDocument<EnterpriseSchema>;

@Schema({timestamps: true})
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

}

export const EnterpriseSchemaFactory = SchemaFactory.createForClass(EnterpriseSchema);