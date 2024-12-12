import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies') // Entry 포인트 역할 (http://localhost:3000/movies)
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies'
    }
    
    @Get("/search")
    search(@Query('year') searchingYear: number) { // 파라미터
        return `We are searching for a movie made after: ${searchingYear}`
    }

    @Get(":id")
    getOne(@Param('id') id: string) { // 파라미터
        return `This will return one movies with the id: ${id}`
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData)
        return movieData;
    }
    
    @Delete(":id")
    remove(@Param('id') id: string) { 
        return `This will delete a movies with the id: ${id}`
    }
    
    // @Put -> 전체 수정
    // @Patch -> 일부부 수정
    @Patch(":id")
    patch(@Param('id') movieId: string, @Body() updateData) { 
        return {
            updateData : movieId,
            ...updateData,
        }
    }


}
