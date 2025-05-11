import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EpisodeWorldlineService } from './episode_worldline.service';
import { CreateEpisodeWorldlineDto } from './dto/create-episode_worldline.dto';
import { UpdateEpisodeWorldlineDto } from './dto/update-episode_worldline.dto';

@Controller('episode-worldline')
export class EpisodeWorldlineController {
  constructor(private readonly episodeWorldlineService: EpisodeWorldlineService) {}

  @Post()
  create(@Body() createEpisodeWorldlineDto: CreateEpisodeWorldlineDto) {
    return this.episodeWorldlineService.create(createEpisodeWorldlineDto);
  }

  @Get()
  findAll() {
    return this.episodeWorldlineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.episodeWorldlineService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEpisodeWorldlineDto: UpdateEpisodeWorldlineDto) {
    return this.episodeWorldlineService.update(id, updateEpisodeWorldlineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.episodeWorldlineService.remove(id);
  }
}
