import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Song extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  artist: string;

  @Prop()
  releaseDate: Date;

  @Prop()
  genre: string;

  @Prop()
  duration: number; // Duration in minutes
}

export const SongSchema = SchemaFactory.createForClass(Song); //create a mongoose.Schema for a class
