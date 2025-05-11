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
import { CharacterLocationService } from './character_location.service';
import { CreateCharacterLocationDto } from './dto/create-character_location.dto';
import { UpdateCharacterLocationDto } from './dto/update-character_location.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { CharacterLocation } from './entities/character_location.entity';

@ApiTags('character-location')
@Controller('character-location')
export class CharacterLocationController {
  constructor(private readonly characterLocationService: CharacterLocationService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new character-location relation',
    description:
      'Creates a relation between a character and a location based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Character-location relation successfully created',
    type: CharacterLocation,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  create(@Body() createCharacterLocationDto: CreateCharacterLocationDto) {
    return this.characterLocationService.create(createCharacterLocationDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all character-location relations',
    description: 'Fetches a list of all character-location relations.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of character-location relations retrieved successfully',
    type: [CharacterLocation],
  })
  findAll() {
    return this.characterLocationService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific character-location relation',
    description: 'Fetches a character-location relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Character-location relation retrieved successfully',
    type: CharacterLocation,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @ApiNotFoundResponse({
    description: 'Character-location relation not found',
  })
  findOne(@Param('id') id: string) {
    return this.characterLocationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific character-location relation',
    description: 'Updates the details of a character-location relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Character-location relation updated successfully',
    type: CharacterLocation,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Character-location relation not found',
  })
  update(@Param('id') id: string, @Body() updateCharacterLocationDto: UpdateCharacterLocationDto) {
    return this.characterLocationService.update(id, updateCharacterLocationDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific character-location relation',
    description: 'Removes a character-location relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Character-location relation deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Character-location relation not found',
  })
  remove(@Param('id') id: string) {
    return this.characterLocationService.remove(id);
  }
}
