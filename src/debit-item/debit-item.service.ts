import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DebitItemSchema } from './schema/debit-item.schema';
import { Model } from 'mongoose';

import { DebitItemDto } from './dto/debit-item.dto';
import { DebitItemCreateDto } from './dto/debit-item-create.dto';

@Injectable()
export class DebitItemService {

    constructor(@InjectModel(DebitItemSchema.name) private readonly debitItemModel: Model<DebitItemSchema>) {}
    

    async create(debitItem: DebitItemCreateDto): Promise<DebitItemDto | null> {
        return await this.debitItemModel.create(debitItem);
    } 

    async getDebitItemById(id: string) : Promise<DebitItemDto | null> {
        const debitItem = await this.debitItemModel.findById(id);

        return debitItem;
    }

    async delete(id: string): Promise<void> {
        const debitItem = await this.debitItemModel.findByIdAndDelete(id);
        if(!debitItem) {
            throw new Error('DebitItem not found'); // TODO: criar exceção
        }
    }

}
