import { Module } from '@nestjs/common';
import { GadgetsService } from './gadgets.service';
import { GadgetsController } from './gadgets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gadget } from './entities/gadget.entity';

@Module({
  imports: [SequelizeModule.forFeature([Gadget])],
  controllers: [GadgetsController],
  providers: [GadgetsService],
})
export class GadgetsModule {}
