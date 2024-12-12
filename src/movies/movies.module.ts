import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity'; // Import the Movie entity

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],  // Register the Movie entity with TypeORM
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}
