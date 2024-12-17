import { Controller, Get} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies') // Entry 포인트 역할 (http://localhost:3000/movies)
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {} // 비지니스로직 함수 불러오기기

    @Get()
    getHello() {
        return this.moviesService.getHello();
    }
}
