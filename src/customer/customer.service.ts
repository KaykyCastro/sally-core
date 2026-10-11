import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerSchema } from './schema/customer.schema';
import { Model } from 'mongoose';

import { CustomerDto } from './dto/customer.dto';
import { CustomerCreateDto } from './dto/customer-create.dto';  
import { CustomerUpdateDto } from './dto/customer-update.dto';

@Injectable()
export class CustomerService {
    constructor(@InjectModel(CustomerSchema.name) private readonly customerModel: Model<CustomerSchema>) {}

    async create(customer: CustomerCreateDto): Promise<CustomerDto | null> {
        return await this.customerModel.create(customer);
    }

    async getCustomerById(id: string) : Promise<CustomerDto | null> {
        const customer = await this.customerModel.findById(id);

        return customer;
    }

    async update(id: string, customer: CustomerUpdateDto): Promise<CustomerDto | null> {
        const customerModel = await this.customerModel.findByIdAndUpdate(id, customer);

        if(!customerModel) {
            throw new Error('Customer not found'); // TODO: criar exceção
        }

        return customerModel;
    }

    async delete(id: string): Promise<void> {
        const customer = await this.customerModel.findByIdAndDelete(id);
        if(!customer) {
            throw new Error('Customer not found'); // TODO: criar exceção
        }
    }

    async increaseDebitValue(id: string, debitValue: number) {
        const customer = await this.customerModel.findById(id);
        
        if(!customer) {
            throw new Error('Customer not found'); // TODO: criar exceção
        }

        customer.debitValue += debitValue;

        return await customer.save();
    }

    async decreaseDebitValue(id: string, debitValue: number) {
        const customer = await this.customerModel.findById(id);
        
        if(!customer) {
            throw new Error('Customer not found'); // TODO: criar exceção
        }
        
        customer.debitValue -= debitValue;

        if(customer.debitValue < 0) {
            customer.debitValue = 0;
        }

        return await customer.save();
    }

}
