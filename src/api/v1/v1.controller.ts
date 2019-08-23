import { Controller, Get, Param } from '@nestjs/common';
import * as _ from 'lodash';
import { V1Service } from './v1.service';
import {
  IMicroInput as IMicroInputExample,
  IMicroEntity as IMicroEntityExample,
} from '@yunle-micro/example/dist/interfaces/micro.interface';

@Controller('v1')
export class V1Controller {
  constructor(private readonly service: V1Service) {}

  @Get(':id')
  async getExample(@Param('id') id: string): Promise<IMicroEntityExample> {
    const data: IMicroInputExample = {
      id: _.toNumber(id),
    }
    return await this.service.getExample(data);
  }

}
