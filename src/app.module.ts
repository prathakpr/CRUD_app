import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/entities/movie.entity'; // Import the Movie entity
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [
    MoviesModule,
    SongsModule,
    // PostgreSQL configuration
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'movieDB',
      entities: [Movie], // Add your entity here
      synchronize: true,
      })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
