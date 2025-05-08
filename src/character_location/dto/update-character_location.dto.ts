import { PartialType } from '@nestjs/swagger';
import { CreateCharacterLocationDto } from './create-character_location.dto';

export class UpdateCharacterLocationDto extends PartialType(CreateCharacterLocationDto) {}
