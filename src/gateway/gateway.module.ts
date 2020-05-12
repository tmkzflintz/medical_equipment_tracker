import { GatewayService } from './gateway.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Gateway } from './gatewat.entity';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Gateway])],
  exports: [GatewayService],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
