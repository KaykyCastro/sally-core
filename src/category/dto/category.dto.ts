import { Types } from 'mongoose';

export class CategoryDto {
    id: string;
    name: string;
    enterpriseId: Types.ObjectId;
}
