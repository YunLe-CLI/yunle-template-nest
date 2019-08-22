import { Controller, Get } from '@nestjs/common';
import { V1Service } from './v1.service';

@Controller('v1')
export class V1Controller {
  constructor(private readonly service: V1Service) {}

  @Get()
  async getHello(): Promise<any> {
    return await this.service.getHello();
  }

}
