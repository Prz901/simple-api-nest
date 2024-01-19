import { Injectable } from '@nestjs/common';

//Processa regras de negocios - coisas uteis

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
