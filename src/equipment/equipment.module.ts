import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentController } from './equipment.controller';
import { Equipment } from './equipment.entity';
import { EquipmentService } from './equipment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Equipment])],
  exports: [EquipmentService],
  controllers: [EquipmentController],
  providers: [EquipmentService],
})
export class EquipmentModule {}
