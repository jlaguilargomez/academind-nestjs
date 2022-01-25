import { Injectable } from '@nestjs/common';

/**
 * The hard work should be done here in order to leave the Controller class lean.
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Pepe!';
  }
}
