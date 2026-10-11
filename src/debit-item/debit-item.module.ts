import { Module } from '@nestjs/common';
import { DebitItemService } from './debit-item.service';
import { DebitItemController } from './debit-item.controller';

@Module({
  controllers: [DebitItemController],
  providers: [DebitItemService],
})
export class DebitItemModule {}
