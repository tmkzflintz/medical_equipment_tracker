import { Role } from './../role/role.entity';
import { Building } from './../building/building.entity';
import { Gateway } from './../gateway/gatewat.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column('text')
  address: string;

  @Column({ type: 'int', nullable: true })
  roleid: number;

  @ManyToOne(type => Role, role => role.hospital)
  @JoinColumn({ name: 'roleid' })
  role: Role;

  @OneToMany(type => Gateway, gateway => gateway.hospital)
  @JoinColumn({ name: 'id', referencedColumnName: 'hospitalid' })
  gateway: Gateway;

  @OneToMany(type => Building, building => building.hospital)
  @JoinColumn({ name: 'id', referencedColumnName: 'hospitalid' })
  building: Building;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
