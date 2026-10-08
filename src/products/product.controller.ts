import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';

import { ProductCreateDto } from './dto/product-create.dto';
import { ProductUpdateDto } from './dto/product-update.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() product: ProductCreateDto) {
    console.log("No controller", product);
    return this.productService.create(product);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() product: ProductUpdateDto) {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }

}
