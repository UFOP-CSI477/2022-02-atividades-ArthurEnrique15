import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BloodType } from './blood-type';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    document: string;

  @Column()
    name: string;

  @Column()
    number: string;

  @Column()
    complement: string;

  @Column()
    street: string;

  @ManyToOne((type) => BloodType, (bloodType) => bloodType.id)
    bloodType?: BloodType;

  @CreateDateColumn()
    createdAt: Date;

  @UpdateDateColumn()
    updatedAt?: Date;
}
