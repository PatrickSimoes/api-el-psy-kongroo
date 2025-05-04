import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterEpisodeDto } from './create-character_episode.dto';

export class UpdateCharacterEpisodeDto extends PartialType(CreateCharacterEpisodeDto) {}
