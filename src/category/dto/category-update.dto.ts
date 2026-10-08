import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryUpdateDto {

    @IsNotEmpty()
    @IsString()
    name: string;

}