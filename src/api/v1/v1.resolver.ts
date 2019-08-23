import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import * as _ from 'lodash';
import { V1Service } from './v1.service';
import { ExampleType } from './graphqls/example.type';
import { IMicroInput as IMicroInputExample } from '@yunle-micro/example';

@Resolver('v1')
export class V1Resolver {
  constructor(private readonly service: V1Service) {}

  @Query(returns => ExampleType)
  async getExample(@Args('id') id: number): Promise<any> {
    const data: IMicroInputExample = {
      id: _.toNumber(id),
    }
    return this.service.getExample(data);
  }

}
