import { Test, TestingModule } from '@nestjs/testing';
import { ShowersResolver } from './showers.resolver';
import { ShowersService } from './showers.service';

describe('ShowersResolver', () => {
  let resolver: ShowersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowersResolver, ShowersService],
    }).compile();

    resolver = module.get<ShowersResolver>(ShowersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
