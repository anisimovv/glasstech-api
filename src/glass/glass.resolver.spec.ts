import { Test, TestingModule } from '@nestjs/testing';
import { GlassResolver } from './glass.resolver';
import { GlassService } from './glass.service';

describe('GlassResolver', () => {
  let resolver: GlassResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlassResolver, GlassService],
    }).compile();

    resolver = module.get<GlassResolver>(GlassResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
