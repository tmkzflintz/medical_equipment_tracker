import { Role } from './../role/role.entity';
import { Gateway } from './../gateway/gatewat.entity';
import { User } from './../users/user.entity';
import { Specification } from './../specification/specification.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Equipment } from 'src/equipment/equipment.entity';

@Entity()
export class Beacon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float', nullable: true })
  rssi: number;

  @Column({ type: 'int', nullable: true })
  battery_percent: number;

  @Column({ type: 'datetime', nullable: true })
  last_in: Date;

  @Column({ type: 'datetime', nullable: true })
  last_out: Date;

  @Column({ type: 'int', nullable: true })
  all_time_use: number;

  @Column({ type: 'int', nullable: true })
  last_time_use: number;

  @Column({ type: 'int', nullable: true })
  last_location_id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  mac_address: string;

  @Column({ type: 'int', nullable: true })
  specificationid: number;

  @Column({ type: 'int', nullable: true })
  gatewayid: number;

  @Column({ type: 'int', nullable: true })
  roleid: number;

  @Column({ type: 'int', nullable: true })
  equipmentid: number;

  @ManyToOne(type => Specification, specification => specification.beacon)
  @JoinColumn({ name: 'specificationid' })
  specification: Specification;

  @ManyToOne(type => Gateway, gateway => gateway.beacon)
  @JoinColumn({ name: 'gatewayid' })
  gateway: Gateway;

  @ManyToOne(type => Role, role => role.beacon)
  @JoinColumn({ name: 'roleid' })
  role: Role;

  @OneToOne(type => Equipment, equipment => equipment.beacon)
  @JoinColumn({ name: 'equipmentid'})
  equipment: Equipment;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
