import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorldlinesService } from './worldlines.service';
import { CreateWorldlineDto } from './dto/create-worldline.dto';
import { UpdateWorldlineDto } from './dto/update-worldline.dto';

@Controller('worldlines')
export class WorldlinesController {
  constructor(private readonly worldlinesService: WorldlinesService) {}

  @Post()
  create(@Body() createWorldlineDto: CreateWorldlineDto) {
    return this.worldlinesService.create(createWorldlineDto);
  }

  @Get()
  findAll() {
    return this.worldlinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worldlinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorldlineDto: UpdateWorldlineDto) {
    return this.worldlinesService.update(+id, updateWorldlineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worldlinesService.remove(+id);
  }
}
