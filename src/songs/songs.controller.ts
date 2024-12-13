import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './schemas/song.schema';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) {}

    @Post()
    async create(@Body() song: Song): Promise<Song> {
      return this.songsService.create(song);
    }
  
    @Get()
    async findAll(): Promise<Song[]> {
      return this.songsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Song> {
      return this.songsService.findOne(id);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() song: Song): Promise<Song> {
      return this.songsService.update(id, song);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      return this.songsService.remove(id);
    }
}
