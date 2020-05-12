import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationController } from './authentication.controller';
import { Authentication } from './authentication.entity';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Authentication])],
  exports: [AuthenticationService],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
