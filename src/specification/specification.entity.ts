import { Beacon } from './../beacon/beacon.entity';
import { Gateway } from './../gateway/gatewat.entity';
import { Equipment } from './../equipment/equipment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Specification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  size: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  weight: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  supply: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  interface: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  protocol: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  standard: string;

  @Column({ type: 'int', nullable: true })
  warranty: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  battery: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  etc: string;

  @OneToMany(type => Equipment, equipment => equipment.specification)
  @JoinColumn({ name: 'id', referencedColumnName: 'specificationid' })
  equipment: Equipment;

  @OneToMany(type => Gateway, gateway => gateway.specification)
  @JoinColumn({ name: 'id', referencedColumnName: 'specificationid' })
  gateway: Gateway;

  @OneToMany(type => Beacon, beacon => beacon.specification)
  @JoinColumn({ name: 'id', referencedColumnName: 'specificationid' })
  beacon: Beacon;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
