import { Controller } from '@nestjs/common';
import { ProductsService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}
}
