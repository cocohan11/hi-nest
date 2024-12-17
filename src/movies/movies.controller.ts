import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies') // Entry point 
export class MoviesController {

    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get('search') 
    search(@Query('year') searchingYear: number) {
        console.log(searchingYear)
        return `we are searching for a movie with a title : ${searchingYear}`
    }

    @Get(":id")
    getOne(@Param('id') movieId : string) {
        return `This will return one movie ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData)
        return movieData;
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch(':id')
    update(@Param('id') movieId: string, @Body() movieData) {
        return {
            updatedMovie: movieId,
            ...movieData
        }
    }


}
