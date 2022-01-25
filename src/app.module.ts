import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

/**
 * Decorators can be attached to clasess (or other things) to give them aditional features. TypeScript
 */
@Module({
  imports: [ProductsModule],
  /**
   * "Controllers" control how we handle incoming requests
   */
  controllers: [AppController],
  /**
   * Extra services that we can inject to some modules to provide additional functionality
   */
  providers: [AppService],
})

/**
 * Modules merge all the above stuff in just one piece. It is usually related to one core functionality
 */
export class AppModule {}
