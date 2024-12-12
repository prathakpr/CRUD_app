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

       // Create a movie
  async create(movie: Partial<Movie>): Promise<Movie> {
    const newMovie = this.movieRepository.create(movie); // Create a new movie entity
    return await this.movieRepository.save(newMovie); // Save to DB
  }

  // Get all movies
  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find(); // Get all movies
  }

  // Get a movie by id
  async findOne(id: number): Promise<Movie> {
    return this.movieRepository.findOne({ where: { id } }); // Get movie by id
  }

  // Update a movie
  async update(id: number, movie: Partial<Movie>): Promise<Movie> {
    await this.movieRepository.update(id, movie); // Update movie by id
    return this.findOne(id); // Return the updated movie
  }

  // Delete a movie
  async remove(id: number): Promise<void> {
    await this.movieRepository.delete(id); // Delete movie by id
  }

   /* local array
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
    } */
}
