import { IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CategoryCreateDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    enterpriseId: Types.ObjectId;

}
