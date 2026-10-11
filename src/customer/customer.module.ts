import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema, CustomerSchemaFactory } from './schema/customer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CustomerSchema.name, schema: CustomerSchemaFactory }])
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
