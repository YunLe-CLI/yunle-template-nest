import { Test, TestingModule } from '@nestjs/testing';
import { V1Resolver } from './v1.resolver';

describe('v1Resolver', () => {
  let resolver: V1Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [V1Resolver],
    }).compile();

    resolver = module.get<V1Resolver>(V1Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
