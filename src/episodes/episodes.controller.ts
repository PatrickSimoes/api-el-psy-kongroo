import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Episode } from './entities/episode.entity';

@ApiTags('episodes')
@Controller('episodes')
export class EpisodesController {
  constructor(private readonly episodesService: EpisodesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new episode',
    description: 'Creates an episode based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Episode successfully created',
    type: Episode,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  create(@Body() createEpisodeDto: CreateEpisodeDto) {
    return this.episodesService.create(createEpisodeDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all episodes',
    description: 'Fetches a list of all episodes.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of episodes retrieved successfully',
    type: [Episode],
  })
  findAll() {
    return this.episodesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific episode',
    description: 'Fetches an episode by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Episode retrieved successfully',
    type: Episode,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @ApiNotFoundResponse({
    description: 'Episode not found',
  })
  findOne(@Param('id') id: string) {
    return this.episodesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific episode',
    description: 'Updates the details of an episode by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Episode updated successfully',
    type: Episode,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Episode not found',
  })
  update(@Param('id') id: string, @Body() updateEpisodeDto: UpdateEpisodeDto) {
    return this.episodesService.update(id, updateEpisodeDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific episode',
    description: 'Removes an episode by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Episode deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Episode not found',
  })
  remove(@Param('id') id: string) {
    return this.episodesService.remove(id);
  }
}
