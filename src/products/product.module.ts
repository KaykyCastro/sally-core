import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchemaFactory } from './schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ProductSchema', schema: ProductSchemaFactory }]),
  ],
  controllers: [ProductController],
  providers: [ProductsService],
})
export class ProductModule {}
