import { ZoneService } from './zone.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './zone.entity';
import { Module } from '@nestjs/common';
import { ZoneController } from './zone.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Zone])],
  exports: [ZoneService],
  controllers: [ZoneController],
  providers: [ZoneService],
})
export class ZoneModule {}
