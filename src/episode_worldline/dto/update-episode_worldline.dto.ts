import { PartialType } from '@nestjs/swagger';
import { CreateEpisodeWorldlineDto } from './create-episode_worldline.dto';

export class UpdateEpisodeWorldlineDto extends PartialType(CreateEpisodeWorldlineDto) {}
