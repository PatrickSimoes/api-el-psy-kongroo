import { Module } from '@nestjs/common';
import { CharacterEpisodeService } from './character_episode.service';
import { CharacterEpisodeController } from './character_episode.controller';
import { CharacterEpisode } from './entities/character_episode.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([CharacterEpisode])],
  controllers: [CharacterEpisodeController],
  providers: [CharacterEpisodeService],
})
export class CharacterEpisodeModule {}
