import { Module } from '@nestjs/common';
import { DebitService } from './debit.service';
import { DebitController } from './debit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DebitSchemaFactory } from './schema/debit.schema';

import { DebitItemModule } from '../debit-item/debit-item.module';
import { ProductModule } from '../products/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DebitSchema', schema: DebitSchemaFactory }]),
    DebitItemModule,
    ProductModule,
  ],
  controllers: [DebitController],
  providers: [DebitService],
})
export class DebitModule {}
