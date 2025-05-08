import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class CreateCharacterEpisodeDto {
  @ApiProperty({ description: 'The ID of the character' })
  @Type(() => Number)
  @IsInt({ message: 'characterId must be an integer' })
  characterId: number;

  @ApiProperty({ description: 'The ID of the episode' })
  @Type(() => Number)
  @IsInt({ message: 'episodeId must be an integer' })
  episodeId: number;
}
