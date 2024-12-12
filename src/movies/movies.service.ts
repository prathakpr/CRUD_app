import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class MoviesService {
    // local DB
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
