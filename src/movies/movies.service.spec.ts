// src/movies/movies.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // 여기에 더 많은 테스트 케이스를 추가할 수 있습니다
  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(Array.isArray(result)).toBeTruthy();
    });
  });
});
