import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterLocationService } from './character_location.service';
import { CreateCharacterLocationDto } from './dto/create-character_location.dto';
import { UpdateCharacterLocationDto } from './dto/update-character_location.dto';

@Controller('character-location')
export class CharacterLocationController {
  constructor(private readonly characterLocationService: CharacterLocationService) {}

  @Post()
  create(@Body() createCharacterLocationDto: CreateCharacterLocationDto) {
    return this.characterLocationService.create(createCharacterLocationDto);
  }

  @Get()
  findAll() {
    return this.characterLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterLocationDto: UpdateCharacterLocationDto) {
    return this.characterLocationService.update(+id, updateCharacterLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterLocationService.remove(+id);
  }
}
