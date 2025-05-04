import { PartialType } from '@nestjs/mapped-types';
import { CreateEpisodeWorldlineDto } from './create-episode_worldline.dto';

export class UpdateEpisodeWorldlineDto extends PartialType(CreateEpisodeWorldlineDto) {}
