import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user';

@Entity('tb_statement')
export class Statement {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    value: number;

  @Column()
    type: string;

  @Column()
    description: string;

  @ManyToOne((type) => User, (user) => user.id)
    user: User;

  @CreateDateColumn()
    createdAt: Date;

  @UpdateDateColumn()
    updatedAt?: Date;
}
