import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Array<Product> = [];

  insertProduct(title: string, desc: string, price: number): string {
    const productId = Math.round(Math.random() * 10000).toString();
    const newProduct = new Product(productId, title, desc, price);

    this.products.push(newProduct);

    return productId;
  }

  getProducts(): Array<Product> {
    return [...this.products];
  }

  getProduct(id: string): Product {
    return this.findProduct(id);
  }

  updateProduct(
    productId: string,
    {
      newTitle,
      newDescription,
      newPrice,
    }: { newTitle: string; newDescription: string; newPrice: number },
  ): Array<Product> {
    // Just to be aware of whether the product exists or not
    this.findProduct(productId);

    this.products = this.products.map((product) => {
      if (product.id === productId) {
        const title = newTitle || product.title;
        const description = newDescription || product.description;
        const price = newPrice || product.price;
        return { ...product, title, description, price };
      }
      return product;
    });

    return [...this.products];
  }

  deleteProduct(productId: string) {
    this.findProduct(productId);
    this.products = this.products.filter((product) => product.id !== productId);

    return [...this.products];
  }

  private findProduct(id: string) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException('Could not find a product.');
    }

    return { ...product };
  }
}
