import { Module } from '@nestjs/common';
import { EnterprisesService } from './enterprises.service';
import { EnterprisesController } from './enterprises.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EnterpriseSchemaFactory } from './schema/enterprise.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'EnterpriseSchema', schema: EnterpriseSchemaFactory }])
  ],
  controllers: [EnterprisesController],
  providers: [EnterprisesService],
})
export class EnterprisesModule {}
