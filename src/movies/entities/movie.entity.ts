import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('date')
  releaseDate: Date;

  @Column('varchar', { array: true, nullable: true })
  genres: string[];

  @Column('int', { default: 0 })
  rating: number;
}
