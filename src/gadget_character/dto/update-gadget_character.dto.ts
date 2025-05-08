import { PartialType } from '@nestjs/swagger';
import { CreateGadgetCharacterDto } from './create-gadget_character.dto';

export class UpdateGadgetCharacterDto extends PartialType(CreateGadgetCharacterDto) {}
