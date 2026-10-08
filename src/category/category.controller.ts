import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categorys')
export class CategoryController {
  constructor(private readonly categorysService: CategoryService) {}
}
