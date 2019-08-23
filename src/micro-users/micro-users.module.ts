import { Module, Global } from '@nestjs/common';
import { MicroUsersService } from './micro-users.service';
import { MicroUsersController } from './micro-users.controller';

@Global()
@Module({
  providers: [MicroUsersService],
  exports: [MicroUsersService],
  controllers: [MicroUsersController],
})

export class MicroUsersModule {}
