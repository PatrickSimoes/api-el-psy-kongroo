import { Module } from '@nestjs/common';
import { CharacterOrganizationService } from './character_organization.service';
import { CharacterOrganizationController } from './character_organization.controller';

@Module({
  controllers: [CharacterOrganizationController],
  providers: [CharacterOrganizationService],
})
export class CharacterOrganizationModule {}
