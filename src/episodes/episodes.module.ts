import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Episode } from './entities/episode.entity';

@Module({
  imports: [SequelizeModule.forFeature([Episode])],
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodesModule {}
