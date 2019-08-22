import { Test, TestingModule } from '@nestjs/testing';
import { MicroUsersService } from './micro-users.service';

describe('MicroUsersService', () => {
  let service: MicroUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroUsersService],
    }).compile();

    service = module.get<MicroUsersService>(MicroUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
