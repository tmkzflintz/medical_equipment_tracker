import { Location } from './../location/location.entity';
import { Beacon } from './../beacon/beacon.entity';
import { Role } from './../role/role.entity';
import { Hospital } from './../hospital/hospital.entity';
import { Specification } from './../specification/specification.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Gateway {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  name: number;

  @Column({ type: 'int', nullable: true })
  specificationid: number;

  @Column({ type: 'int', nullable: true })
  hospitalid: number;

  @Column({ type: 'int', nullable: true })
  locationid: number;

  @Column({ type: 'int', nullable: true })
  roleid: number;

  @ManyToOne(type => Specification, specification => specification.gateway)
  @JoinColumn({ name: 'specificationid' })
  specification: Specification;

  @ManyToOne(type => Hospital, hospital => hospital.gateway)
  @JoinColumn({ name: 'hospitalid' })
  hospital: Hospital;

  @ManyToOne(type => Location, location => location.gateway)
  @JoinColumn({ name: 'locationid' })
  location: Location;

  @ManyToOne(type => Role, role => role.gateway)
  @JoinColumn({ name: 'roleid' })
  role: Role;

  @OneToMany(type => Beacon, beacon => beacon.gateway)
  @JoinColumn({ name: 'id', referencedColumnName: 'gatewayid' })
  beacon: Beacon;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
