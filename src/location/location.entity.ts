import { Gateway } from './../gateway/gatewat.entity';
import { Zone } from './../zone/zone.entity';
import { Department } from './../department/department.entity';
import { Role } from './../role/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  name: string;

  @Column({ type: 'int', nullable: true })
  floor: number;

  @Column({ type: 'double', nullable: true })
  lat: number;

  @Column({ type: 'double', nullable: true })
  lon: number;

  @Column({ type: 'int', nullable: true })
  roleid: number;

  @Column({ type: 'int', nullable: true })
  departmentid: number;

  @Column({ type: 'int', nullable: true })
  zoneid: number;

  @ManyToOne(type => Role, role => role.location)
  @JoinColumn({ name: 'roleid' })
  role: Role;

  @ManyToOne(type => Department, department => department.location)
  @JoinColumn({ name: 'departmentid' })
  department: Department;

  @ManyToOne(type => Zone, zone => zone.location)
  @JoinColumn({ name: 'zoneid' })
  zone: Zone;

  @OneToMany(type => Gateway, gateway => gateway.location)
  @JoinColumn({ name: 'id', referencedColumnName: 'locationid' })
  gateway: Gateway;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
