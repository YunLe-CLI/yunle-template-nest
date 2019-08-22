import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
import { V1Service } from './v1.service';
import { MicroUsersModule } from '../../micro-users/micro-users.module';

@Module({
  imports: [
    MicroUsersModule,
  ],
  controllers: [V1Controller],
  providers: [V1Service],
})
export class V1Module {}
