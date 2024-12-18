import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies : Movie[] = [];

    getAll() : Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID: ${id} not found..`);
        }
        return movie;
    }

    deleteOne(id: number) {
        this.getOne(id);
        this.movies.filter(movie => movie.id !== id);
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }

    update(id: number, movieData) {
        console.log(id)
        console.log(typeof id)
        console.log(movieData)
        console.log(this.movies)
        const movieToUpdate = this.getOne(id); // find 메서드를 통해 찾은 영화 객체
        Object.assign(movieToUpdate, movieData); // 원본 배열의 객체를 직접 가리키는 참조이므로, 이 객체를 수정하면 원본 배열의 객체도 수정됨
        return this.movies;
    }

}
