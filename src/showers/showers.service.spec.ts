import { Test, TestingModule } from '@nestjs/testing';
import { ShowersService } from './showers.service';

describe('ShowersService', () => {
  let service: ShowersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowersService],
    }).compile();

    service = module.get<ShowersService>(ShowersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
