import { Role } from './../role/role.entity';
import { Department } from './../department/department.entity';
import { Problem } from './../problem/problem.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Authentication } from 'src/authentication/authentication.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  firstName: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  lastName: string;

  @Column({ type: 'int', nullable: true })
  roleid: number;

  @Column({ type: 'int', nullable: true })
  departmentid: number;

  @OneToMany(type => Authentication, authentication => authentication.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'userid' })
  authentication: Authentication;

  @OneToMany(type => Problem, problem => problem.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'userid' })
  problem: Problem;

  @ManyToOne(type => Department, department => department.user)
  @JoinColumn({ name: 'departmentid' })
  department: Department;

  @ManyToOne(type => Role, role => role.user)
  @JoinColumn({ name: 'roleid' })
  role: Role;
}
