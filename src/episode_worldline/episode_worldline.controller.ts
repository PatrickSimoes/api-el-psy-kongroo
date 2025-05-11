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
import { EpisodeWorldlineService } from './episode_worldline.service';
import { CreateEpisodeWorldlineDto } from './dto/create-episode_worldline.dto';
import { UpdateEpisodeWorldlineDto } from './dto/update-episode_worldline.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { EpisodeWorldline } from './entities/episode_worldline.entity';

@ApiTags('episode-worldline')
@Controller('episode-worldline')
export class EpisodeWorldlineController {
  constructor(private readonly episodeWorldlineService: EpisodeWorldlineService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new episode-worldline relation',
    description:
      'Creates a relation between an episode and a worldline based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Episode-worldline relation successfully created',
    type: EpisodeWorldline,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  create(@Body() createEpisodeWorldlineDto: CreateEpisodeWorldlineDto) {
    return this.episodeWorldlineService.create(createEpisodeWorldlineDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all episode-worldline relations',
    description: 'Fetches a list of all episode-worldline relations.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of episode-worldline relations retrieved successfully',
    type: [EpisodeWorldline],
  })
  findAll() {
    return this.episodeWorldlineService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific episode-worldline relation',
    description: 'Fetches an episode-worldline relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Episode-worldline relation retrieved successfully',
    type: EpisodeWorldline,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @ApiNotFoundResponse({
    description: 'Episode-worldline relation not found',
  })
  findOne(@Param('id') id: string) {
    return this.episodeWorldlineService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific episode-worldline relation',
    description: 'Updates the details of an episode-worldline relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Episode-worldline relation updated successfully',
    type: EpisodeWorldline,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Episode-worldline relation not found',
  })
  update(@Param('id') id: string, @Body() updateEpisodeWorldlineDto: UpdateEpisodeWorldlineDto) {
    return this.episodeWorldlineService.update(id, updateEpisodeWorldlineDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific episode-worldline relation',
    description: 'Removes an episode-worldline relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Episode-worldline relation deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Episode-worldline relation not found',
  })
  remove(@Param('id') id: string) {
    return this.episodeWorldlineService.remove(id);
  }
}
