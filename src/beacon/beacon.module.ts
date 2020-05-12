import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeaconController } from './beacon.controller';
import { Beacon } from './beacon.entity';
import { BeaconService } from './beacon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Beacon])],
  exports: [BeaconService],
  controllers: [BeaconController],
  providers: [BeaconService],
})
export class BeaconModule {}
