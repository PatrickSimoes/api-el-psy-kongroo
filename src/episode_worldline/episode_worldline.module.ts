import { Module } from '@nestjs/common';
import { EpisodeWorldlineService } from './episode_worldline.service';
import { EpisodeWorldlineController } from './episode_worldline.controller';

@Module({
  controllers: [EpisodeWorldlineController],
  providers: [EpisodeWorldlineService],
})
export class EpisodeWorldlineModule {}
