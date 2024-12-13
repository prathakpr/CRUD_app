import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song } from './schemas/song.schema';

@Injectable()
export class SongsService {
    constructor(
        @InjectModel(Song.name) private readonly songModel: Model<Song>,
      ) {}
    
      // Create a song
      async create(song: Partial<Song>): Promise<Song> {
        const newSong = new this.songModel(song);
        return newSong.save();
      }
    
      // Get all songs
      async findAll(): Promise<Song[]> {
        return this.songModel.find().exec();
      }
    
      // Get a song by id
      async findOne(id: string): Promise<Song> {
        return this.songModel.findById(id).exec();
      }
    
      // Update a song
      async update(id: string, song: Partial<Song>): Promise<Song> {
        return this.songModel.findByIdAndUpdate(id, song, { new: true }).exec();
      }
    
      // Delete a song
      async remove(id: string): Promise<void> {
        await this.songModel.findByIdAndDelete(id).exec();
      }
}
