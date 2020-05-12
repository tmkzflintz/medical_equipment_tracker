import { Problem } from './../problem/problem.entity';
import { Role } from './../role/role.entity';
import { Beacon } from './../beacon/beacon.entity';
import { Specification } from './../specification/specification.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  generation: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  brand: string;

  @Column({ type: 'date', nullable: true })
  last_in: Date;

  @Column({ type: 'date', nullable: true })
  last_out: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  all_time_use: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  last_time_use: string;

  @Column({ type: 'int', nullable: true })
  last_location_id: number;

  @Column({ type: 'int', nullable: true })
  last_user_id: number;

  @Column({ type: 'date', nullable: true })
  receive_date: Date;

  @Column({ type: 'varchar', length: 20, nullable: true })
  serial_number: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  status: string;

  @Column({ type: 'bit', nullable: true })
  request: boolean;

  @Column({ type: 'int', nullable: true })
  specificationid: number;

  @Column({ type: 'int', nullable: true })
  beaconid: number;

  @Column({ type: 'int', nullable: true })
  roleid: number;

  @Column({ type: 'int', nullable: true })
  problemid: number;

  @ManyToOne(type => Specification, specification => specification.equipment)
  @JoinColumn({ name: 'specificationid' })
  specification: Specification;

  @ManyToOne(type => Role, role => role.equipment)
  @JoinColumn({ name: 'roleid' })
  role: Role;

  @OneToOne(type => Beacon, beacon => beacon.equipment)
  @JoinColumn({ name: 'equipmentid' })
  beacon: Beacon;

  @OneToMany(type => Problem, problem => problem.equipment)
  @JoinColumn({ name: 'id', referencedColumnName: 'equipmentid' })
  problem: Problem;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
