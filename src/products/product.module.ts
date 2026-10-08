import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchemaFactory } from './schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ProductSchema', schema: ProductSchemaFactory }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
