import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity'; // Import the Movie entity

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService){}

    // Create a movie
  @Post()
  async create(@Body() movie: Movie): Promise<Movie> {
    return this.moviesService.create(movie);
  }

  // Get all movies
  @Get()
  async findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  // Get a movie by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Movie> {
    return this.moviesService.findOne(id);
  }

  // Update a movie
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() movie: Movie,
  ): Promise<Movie> {
    return this.moviesService.update(id, movie);
  }

  // Delete a movie
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.moviesService.remove(id);
  }
  
}
