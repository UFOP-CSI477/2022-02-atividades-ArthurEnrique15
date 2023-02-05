import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Person } from './person';

@Entity()
export class BloodType {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    type: string;

  @Column()
    factor: string;

  // @OneToMany((type) => Person, (person) => person.bloodType)
  //   persons: Person[];

  @CreateDateColumn()
    createdAt: Date;

  @UpdateDateColumn()
    updatedAt?: Date;
}
