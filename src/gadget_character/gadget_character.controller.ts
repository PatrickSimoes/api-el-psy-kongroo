import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GadgetCharacterService } from './gadget_character.service';
import { CreateGadgetCharacterDto } from './dto/create-gadget_character.dto';
import { UpdateGadgetCharacterDto } from './dto/update-gadget_character.dto';

@Controller('gadget-character')
export class GadgetCharacterController {
  constructor(private readonly gadgetCharacterService: GadgetCharacterService) {}

  @Post()
  create(@Body() createGadgetCharacterDto: CreateGadgetCharacterDto) {
    return this.gadgetCharacterService.create(createGadgetCharacterDto);
  }

  @Get()
  findAll() {
    return this.gadgetCharacterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gadgetCharacterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGadgetCharacterDto: UpdateGadgetCharacterDto) {
    return this.gadgetCharacterService.update(id, updateGadgetCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gadgetCharacterService.remove(id);
  }
}
