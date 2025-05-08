import { PartialType } from '@nestjs/swagger';
import { CreateCharacterOrganizationDto } from './create-character_organization.dto';

export class UpdateCharacterOrganizationDto extends PartialType(CreateCharacterOrganizationDto) {}
