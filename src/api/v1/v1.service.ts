import { Injectable } from '@nestjs/common';
import { MicroService as MicroServiceExample } from '@micro/example/dist/micro.service';

@Injectable()
export class V1Service {
  constructor(
    private readonly microServiceExample: MicroServiceExample,
  ) {}

  async getHello() {
    const user = await this.microServiceExample.getHello();
    return user;
  }

}
