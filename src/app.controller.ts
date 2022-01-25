import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Whether the controller consists of no more than a class with the base decorator "@Controller()" it provides a
 * response to the root of the page. For instance: "your-domain.com/". And all the sub-routes too.
 * If we want to create a controller for a sub-route, we have to add the argument with the same name as STRING
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * NexJS automatically transform the server response into the appropiate type and sets the default HEADERS to it
   *
   * We are able to set the HEADERS only by adding the @Header decorator
   */
  @Header('x-user', 'srPepe')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
