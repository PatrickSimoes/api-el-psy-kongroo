import { PartialType } from '@nestjs/swagger';
import { CreateGadgetDto } from './create-gadget.dto';

export class UpdateGadgetDto extends PartialType(CreateGadgetDto) {}
