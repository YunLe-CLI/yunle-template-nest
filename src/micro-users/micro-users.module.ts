import { Module, Global } from '@nestjs/common';
import { MicroUsersService } from './micro-users.service';

@Global()
@Module({
  providers: [MicroUsersService],
  exports: [MicroUsersService],
})

export class MicroUsersModule {}
