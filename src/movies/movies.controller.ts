import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies') // Entry point 
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}


    @Get()
    getAll() {
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param('id', ParseIntPipe) movieId : number): Movie {
        console.log(typeof movieId)
        return this.moviesService.getOne(movieId);
    }

    @Get('search') 
    search(@Query('year') searchingYear: number) {
        console.log(searchingYear)
        return `we are searching for a movie with a title : ${searchingYear}`
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }


}
