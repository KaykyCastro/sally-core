import { Controller } from '@nestjs/common';
import { DebitService } from './debit.service';

@Controller('debit')
export class DebitController {
  constructor(private readonly debitService: DebitService) {}
}
