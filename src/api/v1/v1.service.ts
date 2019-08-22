import { Injectable } from '@nestjs/common';
import { MicroUsersService } from '../../micro-users/micro-users.service';

@Injectable()
export class V1Service {
  constructor(
    private readonly microUsersService: MicroUsersService,
  ) {}

  async getHello() {
    const user = await this.microUsersService.getHello();
    return user;
  }

}
