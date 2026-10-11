import { Test, TestingModule } from '@nestjs/testing';
import { DebitItemService } from './debit-item.service';

describe('DebitItemService', () => {
  let service: DebitItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebitItemService],
    }).compile();

    service = module.get<DebitItemService>(DebitItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
