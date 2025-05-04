import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterLocationDto } from './create-character_location.dto';

export class UpdateCharacterLocationDto extends PartialType(CreateCharacterLocationDto) {}
