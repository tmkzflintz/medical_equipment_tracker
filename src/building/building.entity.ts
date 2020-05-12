import { Zone } from './../zone/zone.entity';
import { Gateway } from './../gateway/gatewat.entity';
import { Hospital } from './../hospital/hospital.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  name: string;

  @Column({ type: 'int', nullable: true })
  hospitalid: number;

  @ManyToOne(type => Hospital, hospital => hospital.building)
  @JoinColumn({ name: 'hospitalid' })
  hospital: Hospital;

  @OneToMany(type => Zone, zone => zone.building)
  @JoinColumn({ name: 'id', referencedColumnName: 'buildingid' })
  zone: Zone;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
