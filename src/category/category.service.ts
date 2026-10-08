import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CategorySchema } from './schema/category.schema';
import { Model } from 'mongoose';

import { CategoryDto } from './dto/category.dto';
import { CategoryCreateDto } from './dto/category-create.dto';
import { CategoryUpdateDto } from './dto/category-update.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(CategorySchema.name) private readonly categoryModel: Model<CategorySchema>,
    ) {} 

    async create(category: CategoryCreateDto) : Promise<CategoryDto | null> {
        const categoryExist = await this.categoryModel.findOne({name: category.name});
        if(categoryExist) {
            throw new Error('Category already exists');
        }

        const newCategory = await this.categoryModel.create(category);

        return newCategory;
    }

    async findCategoryById(id: string): Promise<CategoryDto | null> {

        const category = await this.categoryModel.findById(id);
        if(!category) {
            throw new Error('Category not found');
        }
        return category;
    }

    async update(id: string, category: CategoryUpdateDto): Promise<CategoryDto | null> {
        const categoryExist = await this.categoryModel.findOne({ name: category.name });
        if(!categoryExist) {
            throw new Error('Category not found');
        }

        const updatedCategory = await this.categoryModel.findByIdAndUpdate(id, category, { new: true });

        return updatedCategory;
    }

    async delete(id: string): Promise<void> {
        const category = await this.categoryModel.findByIdAndDelete(id);
        if(!category) {
            throw new Error('Category not found');
        }
    }


}
