import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecificationController } from './specification.controller';
import { Specification } from './specification.entity';
import { SpecificationService } from './specification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Specification])],
  exports: [SpecificationService],
  controllers: [SpecificationController],
  providers: [SpecificationService],
})
export class SpecificationModule {}
