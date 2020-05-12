import { Equipment } from './../equipment/equipment.entity';
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
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  status: string;

  @Column({ type: 'datetime', nullable: true })
  start_date: Date;

  @Column({ type: 'datetime', nullable: true })
  finish_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'int', nullable: true })
  equipmentid: number;

  @Column({ type: 'int', nullable: true })
  userid: number;

  @ManyToOne(type => User, user => user.problem)
  @JoinColumn({ name: 'userid' })
  user: User;

  @ManyToOne(type => Equipment, equipment => equipment.problem)
  @JoinColumn({ name: 'roleid' })
  equipment: Equipment;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
