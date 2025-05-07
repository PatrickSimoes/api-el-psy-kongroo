import { Module } from '@nestjs/common';
import { EpisodeWorldlineService } from './episode_worldline.service';
import { EpisodeWorldlineController } from './episode_worldline.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EpisodeWorldline } from './entities/episode_worldline.entity';

@Module({
  imports: [SequelizeModule.forFeature([EpisodeWorldline])],
  controllers: [EpisodeWorldlineController],
  providers: [EpisodeWorldlineService],
})
export class EpisodeWorldlineModule {}
