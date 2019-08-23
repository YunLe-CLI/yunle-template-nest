import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
import { V1Service } from './v1.service';
import { V1Resolver } from './v1.resolver';

@Module({
  controllers: [V1Controller],
  providers: [V1Service, V1Resolver],
})
export class V1Module {}
