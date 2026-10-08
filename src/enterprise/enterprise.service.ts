import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EnterpriseSchema  } from './schema/enterprise.schema';
import { Model } from 'mongoose';
import { EnterpriseDto } from './dto/enterprise.dto';
import { EnterpriseCreateDto } from './dto/enterprise-create.dto';
import { EnterpriseUpdateDto } from './dto/enterprise.update.dto';

@Injectable()
export class EnterprisesService {
    constructor(
        @InjectModel(EnterpriseSchema.name) private readonly enterpriseModel: Model<EnterpriseSchema>,
    ) {} 

    async create(enterprise : EnterpriseCreateDto): Promise<EnterpriseDto> {
        const enterpriseExist = await this.enterpriseModel.findOne({ email: enterprise.email });
        if (enterpriseExist) {
            throw new Error('Enterprise already exists');
        }

        const newEnterprise = this.enterpriseModel.create(enterprise);

        return newEnterprise;
    }

    async findEnterpriseById(id: string): Promise<EnterpriseDto> {

        console.log("No service", id);

        const enterprise = await this.enterpriseModel.findById(id);

        console.log("No service", enterprise);

        if (!enterprise) {
            throw new Error('Enterprise not found');
        }
        return enterprise;
    }

    async update(id: string, enterprise: EnterpriseUpdateDto): Promise<EnterpriseDto | null> {
        const enterpriseExist = await this.enterpriseModel.findOne({ email: enterprise.email });
        if (!enterpriseExist) {
            throw new Error('Enterprise not found');
        }

        const updatedEnterprise = await this.enterpriseModel.findByIdAndUpdate(id, enterprise, { new: true });

        return updatedEnterprise;
    }

    async delete(id: string): Promise<void> {
        const enterprise = await this.enterpriseModel.findByIdAndDelete(id);
        if (!enterprise) {
            throw new Error('Enterprise not found');
        }
    }

}
