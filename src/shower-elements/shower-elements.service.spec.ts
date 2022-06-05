import { Test, TestingModule } from '@nestjs/testing';
import { ShowerElementsService } from './shower-elements.service';

describe('ShowerElementsService', () => {
  let service: ShowerElementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowerElementsService],
    }).compile();

    service = module.get<ShowerElementsService>(ShowerElementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
