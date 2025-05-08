import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsInt, Min, Max, IsEnum } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export enum Gender {
  M = 'M',
  F = 'F',
  Other = 'Other',
}

export class CreateCharacterDto {
  @ApiProperty({
    description: 'Nome completo do personagem',
    example: 'Rick Sanchez',
  })
  @IsString({ message: 'name deve ser texto' })
  @Transform(({ value }) => String(value)?.trim())
  name: string;

  @ApiPropertyOptional({
    description: 'Alcunha ou apelido do personagem',
    example: 'RiRick',
  })
  @IsOptional()
  @IsString({ message: 'alias deve ser texto' })
  @Transform(({ value }) => String(value)?.trim())
  alias?: string;

  @ApiPropertyOptional({
    description: 'Data de nascimento no formato ISO 8601',
    example: '1950-06-15',
  })
  @IsOptional()
  @IsDateString({}, { message: 'birthday deve ser uma data válida ISO 8601' })
  birthday?: string;

  @ApiPropertyOptional({
    description: 'Idade do personagem em anos completos',
    example: 70,
  })
  @IsOptional()
  @IsInt({ message: 'age deve ser um número inteiro' })
  @Min(0, { message: 'age não pode ser negativo' })
  @Max(1000, { message: 'age parece excessivo' })
  @Type(() => Number)
  age?: number;

  @ApiProperty({
    description: 'Gênero do personagem',
    enum: Gender,
    example: Gender.M,
  })
  @IsEnum(Gender, {
    message: `gender deve ser um dos valores: ${Object.values(Gender).join(', ')}`,
  })
  gender: Gender;
}
