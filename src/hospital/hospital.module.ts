import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalController } from './hospital.controller';
import { Hospital } from './hospital.entity';
import { HospitalService } from './hospital.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital])],
  exports: [HospitalService],
  controllers: [HospitalController],
  providers: [HospitalService],
})
export class HospitalModule {}
