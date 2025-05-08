import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, Min, IsDateString, IsNumber } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateEpisodeDto {
  @ApiProperty({
    description: 'Título do episódio',
    example: 'Pilot',
  })
  @IsString({ message: 'title deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  title: string;

  @ApiPropertyOptional({
    description: 'Descrição detalhada do episódio',
    example: 'Rick visita outra dimensão pela primeira vez...',
  })
  @IsOptional()
  @IsString({ message: 'description deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  description?: string;

  @ApiProperty({
    description: 'Número da temporada',
    example: 1,
  })
  @IsInt({ message: 'season deve ser um inteiro' })
  @Min(1, { message: 'season deve ser no mínimo 1' })
  @Type(() => Number)
  season: number;

  @ApiProperty({
    description: 'Número do episódio dentro da temporada',
    example: 1,
  })
  @IsInt({ message: 'episodeNumber deve ser um inteiro' })
  @Min(1, { message: 'episodeNumber deve ser no mínimo 1' })
  @Type(() => Number)
  episodeNumber: number;

  @ApiPropertyOptional({
    description: 'Data de exibição original (ISO 8601)',
    example: '2013-12-02',
  })
  @IsOptional()
  @IsDateString({}, { message: 'airDate deve ser uma data válida ISO 8601' })
  airDate?: string;

  @ApiPropertyOptional({
    description: 'Duração em minutos',
    example: 22,
  })
  @IsOptional()
  @IsInt({ message: 'duration deve ser um inteiro' })
  @Min(1, { message: 'duration deve ser no mínimo 1 minuto' })
  @Type(() => Number)
  duration?: number;

  @ApiPropertyOptional({
    description: 'Avaliação média (de 0 a 10)',
    example: 9.5,
  })
  @IsOptional()
  @IsNumber({}, { message: 'rating deve ser um número' })
  @Min(0, { message: 'rating mínimo é 0' })
  @Type(() => Number)
  rating?: number;
}
