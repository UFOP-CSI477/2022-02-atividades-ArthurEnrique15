import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BloodType {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    type: string;

  @Column()
    factor: string;

  @CreateDateColumn()
    created_at: Date;

  @UpdateDateColumn()
    updated_at?: Date;

  @DeleteDateColumn()
    deleted_at?: Date;
}
