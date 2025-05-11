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
import { CharacterEpisodeService } from './character_episode.service';
import { CreateCharacterEpisodeDto } from './dto/create-character_episode.dto';
import { UpdateCharacterEpisodeDto } from './dto/update-character_episode.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { CharacterEpisode } from './entities/character_episode.entity';

@ApiTags('character-episode')
@Controller('character-episode')
export class CharacterEpisodeController {
  constructor(private readonly characterEpisodeService: CharacterEpisodeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new character-episode relation',
    description:
      'Creates a relation between a character and an episode based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Character-episode relation successfully created',
    type: CharacterEpisode,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  create(@Body() createCharacterEpisodeDto: CreateCharacterEpisodeDto) {
    return this.characterEpisodeService.create(createCharacterEpisodeDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all character-episode relations',
    description: 'Fetches a list of all character-episode relations.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of character-episode relations retrieved successfully',
    type: [CharacterEpisode],
  })
  findAll() {
    return this.characterEpisodeService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific character-episode relation',
    description: 'Fetches a character-episode relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Character-episode relation retrieved successfully',
    type: CharacterEpisode,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @ApiNotFoundResponse({
    description: 'Character-episode relation not found',
  })
  findOne(@Param('id') id: string) {
    return this.characterEpisodeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific character-episode relation',
    description: 'Updates the details of a character-episode relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Character-episode relation updated successfully',
    type: CharacterEpisode,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Character-episode relation not found',
  })
  update(@Param('id') id: string, @Body() updateCharacterEpisodeDto: UpdateCharacterEpisodeDto) {
    return this.characterEpisodeService.update(id, updateCharacterEpisodeDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific character-episode relation',
    description: 'Removes a character-episode relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Character-episode relation deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Character-episode relation not found',
  })
  remove(@Param('id') id: string) {
    return this.characterEpisodeService.remove(id);
  }
}
