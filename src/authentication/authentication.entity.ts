import { User } from './../users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Authentication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  username: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  password: string;

  @Column({ type: 'int', nullable: true })
  userid: number;

  @ManyToOne(type => User, user => user.authentication)
  @JoinColumn({ name: 'userid', referencedColumnName: 'id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
