import { Injectable } from '@nestjs/common';
import { CreateCharacterOrganizationDto } from './dto/create-character_organization.dto';
import { UpdateCharacterOrganizationDto } from './dto/update-character_organization.dto';

@Injectable()
export class CharacterOrganizationService {
  create(createCharacterOrganizationDto: CreateCharacterOrganizationDto) {
    return 'This action adds a new characterOrganization';
  }

  findAll() {
    return `This action returns all characterOrganization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characterOrganization`;
  }

  update(id: number, updateCharacterOrganizationDto: UpdateCharacterOrganizationDto) {
    return `This action updates a #${id} characterOrganization`;
  }

  remove(id: number) {
    return `This action removes a #${id} characterOrganization`;
  }
}
