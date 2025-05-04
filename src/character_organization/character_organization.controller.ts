import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterOrganizationService } from './character_organization.service';
import { CreateCharacterOrganizationDto } from './dto/create-character_organization.dto';
import { UpdateCharacterOrganizationDto } from './dto/update-character_organization.dto';

@Controller('character-organization')
export class CharacterOrganizationController {
  constructor(private readonly characterOrganizationService: CharacterOrganizationService) {}

  @Post()
  create(@Body() createCharacterOrganizationDto: CreateCharacterOrganizationDto) {
    return this.characterOrganizationService.create(createCharacterOrganizationDto);
  }

  @Get()
  findAll() {
    return this.characterOrganizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterOrganizationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterOrganizationDto: UpdateCharacterOrganizationDto) {
    return this.characterOrganizationService.update(+id, updateCharacterOrganizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterOrganizationService.remove(+id);
  }
}
