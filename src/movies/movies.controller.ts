import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies') // Entry 포인트 역할 (http://localhost:3000/movies)
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies'
    }

    @Get("/:id")
    getOne(@Param('id') id: string) { // 파라미터
        return `This will return one movies with the id: ${id}`
    }

    @Post()
    create() {
        return 'This will create a movie'
    }
    
    @Delete("/:id")
    remove(@Param('id') id: string) { 
        return `This will delete a movies with the id: ${id}`
    }
    
    // @Put -> 전체 수정
    // @Patch -> 일부부 수정
    @Patch("/:id")
    patch(@Param('id') id: string) { 
        return `This will update a movies with the id: ${id}`
    }


}
