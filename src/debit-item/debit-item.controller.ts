import { Controller } from '@nestjs/common';
import { DebitItemService } from './debit-item.service';

@Controller('debit-item')
export class DebitItemController {
  constructor(private readonly debitItemService: DebitItemService) {}
}
