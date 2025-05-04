import { PartialType } from '@nestjs/mapped-types';
import { CreateGadgetCharacterDto } from './create-gadget_character.dto';

export class UpdateGadgetCharacterDto extends PartialType(CreateGadgetCharacterDto) {}
