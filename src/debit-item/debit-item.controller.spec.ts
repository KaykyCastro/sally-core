import { Test, TestingModule } from '@nestjs/testing';
import { DebitItemController } from './debit-item.controller';
import { DebitItemService } from './debit-item.service';

describe('DebitItemController', () => {
  let controller: DebitItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DebitItemController],
      providers: [DebitItemService],
    }).compile();

    controller = module.get<DebitItemController>(DebitItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
