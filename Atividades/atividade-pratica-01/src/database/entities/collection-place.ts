import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CollectionPlace {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    number: string;

  @Column()
    complement?: string;

  @Column()
    street: string;

  @CreateDateColumn()
    createdAt: Date;

  @UpdateDateColumn()
    updatedAt?: Date;
}
