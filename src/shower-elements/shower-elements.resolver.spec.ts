import { Test, TestingModule } from '@nestjs/testing';
import { ShowerElementsResolver } from './shower-elements.resolver';
import { ShowerElementsService } from './shower-elements.service';

describe('ShowerElementsResolver', () => {
  let resolver: ShowerElementsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowerElementsResolver, ShowerElementsService],
    }).compile();

    resolver = module.get<ShowerElementsResolver>(ShowerElementsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
