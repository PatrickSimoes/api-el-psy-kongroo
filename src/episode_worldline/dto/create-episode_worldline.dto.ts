import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateEpisodeWorldlineDto {
  @ApiProperty({
    description: 'UUID do episódio',
    example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  })
  @IsUUID('4', { message: 'episodeId deve ser um UUID válido (v4)' })
  @Transform(({ value }) => String(value)?.trim())
  episodeId: string;

  @ApiProperty({
    description: 'UUID da worldline',
    example: '1c2d3e4f-5a6b-7c8d-9e0f-1a2b3c4d5e6f',
  })
  @IsUUID('4', { message: 'worldlineId deve ser um UUID válido (v4)' })
  @Transform(({ value }) => String(value)?.trim())
  worldlineId: string;
}
