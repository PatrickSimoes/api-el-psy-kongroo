import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterOrganizationDto } from './create-character_organization.dto';

export class UpdateCharacterOrganizationDto extends PartialType(CreateCharacterOrganizationDto) {}
