import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GadgetsService } from './gadgets.service';
import { CreateGadgetDto } from './dto/create-gadget.dto';
import { UpdateGadgetDto } from './dto/update-gadget.dto';

@Controller('gadgets')
export class GadgetsController {
  constructor(private readonly gadgetsService: GadgetsService) {}

  @Post()
  create(@Body() createGadgetDto: CreateGadgetDto) {
    return this.gadgetsService.create(createGadgetDto);
  }

  @Get()
  findAll() {
    return this.gadgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gadgetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGadgetDto: UpdateGadgetDto) {
    return this.gadgetsService.update(+id, updateGadgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gadgetsService.remove(+id);
  }
}
