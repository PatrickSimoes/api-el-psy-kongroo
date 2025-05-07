import { Module } from '@nestjs/common';
import { CharacterOrganizationService } from './character_organization.service';
import { CharacterOrganizationController } from './character_organization.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CharacterOrganization } from './entities/character_organization.entity';

@Module({
  imports: [SequelizeModule.forFeature([CharacterOrganization])],
  controllers: [CharacterOrganizationController],
  providers: [CharacterOrganizationService],
})
export class CharacterOrganizationModule {}
