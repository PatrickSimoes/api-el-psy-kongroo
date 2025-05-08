import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, Min } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateWorldlineDto {
  @ApiProperty({
    description: 'Palavra da worldline',
    example: 'RickMorty',
  })
  @IsString({ message: 'word deve ser uma string' })
  @Transform(({ value }) => String(value)?.trim())
  word: string;

  @ApiProperty({
    description: 'Número da linha',
    example: 42,
  })
  @IsInt({ message: 'lineNumber deve ser um inteiro' })
  @Min(0, { message: 'lineNumber deve ser no mínimo 0' })
  @Type(() => Number)
  lineNumber: number;

  @ApiPropertyOptional({
    description: 'Ocorrência na mesma linha',
    example: 1,
  })
  @IsOptional()
  @IsInt({ message: 'occurrence deve ser um inteiro' })
  @Min(1, { message: 'occurrence deve ser no mínimo 1' })
  @Type(() => Number)
  occurrence?: number;
}
