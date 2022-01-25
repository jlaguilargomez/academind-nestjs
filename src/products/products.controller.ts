import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

/**
 * The controller only handles the server comunication!
 */

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ): { id: string } {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDescription,
      prodPrice,
    );

    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  /**
   * Take into account that if we have two GET methods in the same controller,
   * it would be executed only the first one
   */
  @Get(':productId')
  getProduct(@Param('productId') productId: string): Product {
    return this.productsService.getProduct(productId);
  }

  /**
   * Why I'm using PATCH instead of PUT?
   * Because I only want to change some of the properties not to replace all the
   * product itself
   */
  @Patch(':productId')
  updateProduct(
    @Param('productId') productId: string,
    @Body('title') newTitle: string,
    @Body('description') newDescription: string,
    @Body('price') newPrice: number,
  ) {
    return this.productsService.updateProduct(productId, {
      newTitle,
      newDescription,
      newPrice,
    });
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: string) {
    return this.productsService.deleteProduct(productId);
  }
}
