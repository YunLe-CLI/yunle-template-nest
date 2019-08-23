import { Injectable } from '@nestjs/common';
import {
  MicroService as MicroServiceExample,
} from '@yunle-micro/example';
import {
  IMicroInput as IMicroInputExample,
  IMicroEntity as IMicroEntityExample,
} from '@yunle-micro/example/dist/interfaces/micro.interface';

@Injectable()
export class V1Service {
  constructor(
    private readonly microServiceExample: MicroServiceExample,
  ) {}

  async getExample(data: IMicroInputExample): Promise<IMicroEntityExample> {
    const user: IMicroEntityExample = await this.microServiceExample.getHello(data).toPromise();
    return user;
  }

}
