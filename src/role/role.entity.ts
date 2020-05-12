import { User } from './../users/user.entity';
import { Equipment } from './../equipment/equipment.entity';
import { Beacon } from './../beacon/beacon.entity';
import { Gateway } from './../gateway/gatewat.entity';
import { Location } from './../location/location.entity';
import { Hospital } from './../hospital/hospital.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Hospital, hospital => hospital.role)
  @JoinColumn({ name: 'id', referencedColumnName: 'roleid' })
  hospital: Hospital;

  @OneToMany(type => Location, location => location.role)
  @JoinColumn({ name: 'id', referencedColumnName: 'roleid' })
  location: Location;

  @OneToMany(type => Gateway, gateway => gateway.role)
  @JoinColumn({ name: 'id', referencedColumnName: 'roleid' })
  gateway: Gateway;

  @OneToMany(type => Beacon, beacon => beacon.role)
  @JoinColumn({ name: 'id', referencedColumnName: 'roleid' })
  beacon: Beacon;

  @OneToMany(type => Equipment, equipment => equipment.role)
  @JoinColumn({ name: 'id', referencedColumnName: 'roleid' })
  equipment: Equipment;

  @OneToMany(type => User, user => user.role)
  @JoinColumn({ name: 'id', referencedColumnName: 'roleid' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
