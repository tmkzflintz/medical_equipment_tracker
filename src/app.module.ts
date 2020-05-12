import { ZoneModule } from './zone/zone.module';
import { Zone } from './zone/zone.entity';
import { SpecificationModule } from './specification/specification.module';
import { Specification } from './specification/specification.entity';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.entity';
import { ProblemModule } from './problem/problem.module';
import { Problem } from './problem/problem.entity';
import { LocationModule } from './location/location.module';
import { Location } from './location/location.entity';
import { HospitalModule } from './hospital/hospital.module';
import { Hospital } from './hospital/hospital.entity';
import { GatewayModule } from './gateway/gateway.module';
import { Gateway } from './gateway/gatewat.entity';
import { DepartmentModule } from './department/department.module';
import { Department } from './department/department.entity';
import { BuildingModule } from './building/building.module';
import { Building } from './building/building.entity';
import { BeaconModule } from './beacon/beacon.module';
import { Beacon } from './beacon/beacon.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentModule } from './equipment/equipment.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    AuthenticationModule,
    BeaconModule,
    BuildingModule,
    DepartmentModule,
    EquipmentModule,
    GatewayModule,
    HospitalModule,
    LocationModule,
    ProblemModule,
    RoleModule,
    SpecificationModule,
    UsersModule,
    ZoneModule,
  ],
})
export class AppModule {}
