import { Body, Controller, Post, Get, Delete, Put, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

import { CategoryCreateDto } from './dto/category-create.dto';
import { CategoryDto } from './dto/category.dto';
import { CategoryUpdateDto } from './dto/category-update.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categorysService: CategoryService) {}

  @Post()
  async createCategory(@Body() category: CategoryCreateDto) {
    return this.categorysService.create(category);
  }

  @Get(':id')
  async findCategoryById(@Param('id') id: string) {
    return this.categorysService.findCategoryById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() category: CategoryUpdateDto) {
    return this.categorysService.update(id, category);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.categorysService.delete(id);
  }

}
