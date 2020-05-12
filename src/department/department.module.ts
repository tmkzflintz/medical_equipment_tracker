import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from './department.controller';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  exports: [DepartmentService],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
