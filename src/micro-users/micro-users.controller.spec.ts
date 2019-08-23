import { Test, TestingModule } from '@nestjs/testing';
import { MicroUsersController } from './micro-users.controller';

describe('MicroUsers Controller', () => {
  let controller: MicroUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroUsersController],
    }).compile();

    controller = module.get<MicroUsersController>(MicroUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
