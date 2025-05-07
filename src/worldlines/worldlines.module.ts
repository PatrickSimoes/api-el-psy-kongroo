import { Module } from '@nestjs/common';
import { WorldlinesService } from './worldlines.service';
import { WorldlinesController } from './worldlines.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worldline } from './entities/worldline.entity';

@Module({
  imports: [SequelizeModule.forFeature([Worldline])],
  controllers: [WorldlinesController],
  providers: [WorldlinesService],
})
export class WorldlinesModule {}
