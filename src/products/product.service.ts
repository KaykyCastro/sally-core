import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductSchema } from './schema/product.schema';
import { Model } from 'mongoose';


import { ProductDto } from './dto/product.dto';
import { ProductCreateDto } from './dto/product-create.dto';
import { ProductUpdateDto } from './dto/product-update.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(ProductSchema.name) private readonly productModel: Model<ProductSchema>) {}


    async create(product: ProductCreateDto): Promise<ProductDto | null> {
        const productExists = await this.productModel.findOne({ code: product.code });
        if (productExists) {
            throw new Error('Product already exists'); // TODO: criar exceção
        }

        const productModel = new this.productModel(product);
        return await productModel.save();
    }


    async getProductById(id: string) : Promise<ProductDto | null> {
        const product = await this.productModel.findById(id);

        return product;
    }

    async update(id: string, product: ProductUpdateDto): Promise<ProductDto | null> {
        
        const productModel = await this.productModel.findByIdAndUpdate(id, product);

        if(!productModel) {
            throw new Error('Product not found'); // TODO: criar exceção
        }

        return productModel;
    }

    async delete(id: string): Promise<void> {
        const product = await this.productModel.findByIdAndDelete(id);
        if(!product) {
            throw new Error('Product not found'); // TODO: criar exceção
        }
    }
    
}
