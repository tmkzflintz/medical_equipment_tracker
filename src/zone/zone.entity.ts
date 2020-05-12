import { Building } from './../building/building.entity';
import { Location } from './../location/location.entity';
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
export class Zone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  name: string;

  @Column({ type: 'int', nullable: true })
  buildingid: number;

  @OneToMany(type => Location, location => location.zone)
  @JoinColumn({ name: 'id', referencedColumnName: 'zoneid' })
  location: Location;

  @ManyToOne(type => Building, building => building.zone)
  @JoinColumn({ name: 'buildingid' })
  building: Building;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
