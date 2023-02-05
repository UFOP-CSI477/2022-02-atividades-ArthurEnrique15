import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CollectionPlace } from './collection-place';
import { Person } from './person';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    date: Date;

  @ManyToOne((type) => Person, (person) => person.id)
    person: Person;

  @ManyToOne((type) => CollectionPlace, (collectionPlace) => collectionPlace.id)
    collectionPlace: CollectionPlace;

  @CreateDateColumn()
    createdAt: Date;

  @UpdateDateColumn()
    updatedAt?: Date;
}
