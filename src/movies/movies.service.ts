import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Movie } from './entities/movie.entity'; // Import the Movie entity
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class MoviesService {
    // local DB
    constructor(
        @InjectRepository(Movie) 
        private movieRepository: Repository<Movie>, //we will use movieRepository for our CRUD operations
      ) {}
   // local array
    private readonly movies = [];
    create(movie : string) {
        // Save the song in the database
        this.movies.push(movie);
        return this.movies;
    }
    findAll() {
        // fetch the songs from the db
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        return this.movies;
    }
}
