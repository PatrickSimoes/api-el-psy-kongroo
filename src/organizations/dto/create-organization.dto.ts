import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateOrganizationDto {
  @ApiProperty({
    description: 'Nome da organização',
    example: 'Cronenberg Corp',
  })
  @IsString({ message: 'name deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  name: string;

  @ApiPropertyOptional({
    description: 'Descrição da organização',
    example: 'Empresa responsável por experimentos interdimensionais',
  })
  @IsOptional()
  @IsString({ message: 'description deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  description?: string;

  @ApiProperty({
    description: 'Endereço da organização',
    example: '123 Main St, Earth Dimension',
  })
  @IsString({ message: 'address deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  address: string;
}
