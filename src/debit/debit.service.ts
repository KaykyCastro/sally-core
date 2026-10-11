import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DebitSchema } from './schema/debit.schema';
import { Model } from 'mongoose';
import { DebitDto } from './dto/debit.dto';
import { DebitCreateDto } from './dto/debit-create.dto';

import { ProductService } from '../products/product.service';
import { DebitItemService } from '../debit-item/debit-item.service';
import { DebitItemCreateDto } from '../debit-item/dto/debit-item-create.dto';

@Injectable()
export class DebitService {

    constructor(
        @InjectModel(DebitSchema.name) private readonly debitModel: Model<DebitSchema>,
        private readonly productService: ProductService,
        private readonly debitItemService: DebitItemService
    ) {}

    async create(debitDto: DebitCreateDto): Promise<DebitDto | null> {

        const customer = await this.productService.getProductById(debitDto.customerId);
        if(!customer) {
            throw new Error('Customer not found'); // TODO: criar exceção
        }

        const itemsToCreate: DebitItemCreateDto[] = [];

        for(const item of debitDto.productsId) {
            const product = await this.productService.getProductById(item);
            if(!product) {
                throw new Error('Product not found'); // TODO: criar exceção
            }

            const unitPrice = product.price;
            const total = unitPrice * product.quantity;

            itemsToCreate.push(
                {
                   unitPrice,
                   total,
                   quantity: product.quantity,
                   productId: product._id,
                }
            )
        }

        const totalAmount = itemsToCreate.reduce((acc, item) => acc + item.total, 0);

        const debitTocreate = {
            total: totalAmount,
            customerId: debitDto.customerId,
            debitItemsId: [],
        }

        const debit = new this.debitModel(debitTocreate);


    }

}
