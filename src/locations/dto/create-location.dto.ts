import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateLocationDto {
  @ApiProperty({
    description: 'Nome da localização',
    example: 'Casa da Família',
  })
  @IsString({ message: 'name deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  name: string;

  @ApiPropertyOptional({
    description: 'Descrição da localização',
    example: 'Residência principal dos protagonistas',
  })
  @IsOptional()
  @IsString({ message: 'description deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  description?: string;

  @ApiPropertyOptional({
    description: 'Cidade onde a localização se encontra',
    example: 'São Paulo',
  })
  @IsOptional()
  @IsString({ message: 'city deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  city?: string;

  @ApiPropertyOptional({
    description: 'País onde a localização se encontra',
    example: 'Brasil',
  })
  @IsOptional()
  @IsString({ message: 'country deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  country?: string;

  @ApiPropertyOptional({
    description: 'Latitude da localização',
    example: -23.55052,
  })
  @IsOptional()
  @IsNumber({}, { message: 'latitude deve ser um número' })
  @Type(() => Number)
  latitude?: number;

  @ApiPropertyOptional({
    description: 'Longitude da localização',
    example: -46.633308,
  })
  @IsOptional()
  @IsNumber({}, { message: 'longitude deve ser um número' })
  @Type(() => Number)
  longitude?: number;
}
