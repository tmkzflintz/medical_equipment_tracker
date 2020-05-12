import { Location } from './../location/location.entity';
import { Problem } from './../problem/problem.entity';
import { User } from './../users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  name: string;

  @OneToMany(type => User, user => user.department)
  @JoinColumn({ name: 'id', referencedColumnName: 'userid' })
  user: User;

  @OneToMany(type => Location, location => location.department)
  @JoinColumn({ name: 'id', referencedColumnName: 'userid' })
  location: Location;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
