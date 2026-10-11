import { Types } from 'mongoose';

export class CustomerDto {
    name: string;
    address: string;
    numberWithPrefix: string;
    debitValue: number;
    enterpriseId: Types.ObjectId;
}