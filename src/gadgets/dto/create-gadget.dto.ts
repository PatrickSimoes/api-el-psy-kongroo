import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateGadgetDto {
  @ApiProperty({
    description: 'Nome do gadget',
    example: 'Portal Gun',
  })
  @IsString({ message: 'name deve ser texto' })
  @Transform(({ value }) => String(value)?.trim())
  name: string;

  @ApiPropertyOptional({
    description: 'Descrição do gadget',
    example: 'Permite criar portais interdimensionais',
  })
  @IsOptional()
  @IsString({ message: 'description deve ser texto' })
  @Transform(({ value }) => String(value)?.trim())
  description?: string;

  @ApiProperty({
    description: 'Modelo do gadget',
    example: 'PG-01',
  })
  @IsString({ message: 'model deve ser texto' })
  @Transform(({ value }) => String(value)?.trim())
  model: string;

  @ApiPropertyOptional({
    description: 'Fabricante do gadget',
    example: 'Acme Corp',
  })
  @IsOptional()
  @IsString({ message: 'manufacturer deve ser texto' })
  @Transform(({ value }) => String(value)?.trim())
  manufacturer?: string;

  @ApiPropertyOptional({
    description: 'Número de série',
    example: 'SN-123456',
  })
  @IsOptional()
  @IsString({ message: 'serialNumber deve ser texto' })
  @Transform(({ value }) => String(value)?.trim())
  serialNumber?: string;

  @ApiPropertyOptional({
    description: 'Data de lançamento (ISO 8601)',
    example: '2022-07-15',
  })
  @IsOptional()
  @IsDateString({}, { message: 'releaseDate deve ser uma data válida ISO 8601' })
  releaseDate?: string;
}
