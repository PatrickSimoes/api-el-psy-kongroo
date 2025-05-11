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
import { CharacterOrganizationService } from './character_organization.service';
import { CreateCharacterOrganizationDto } from './dto/create-character_organization.dto';
import { UpdateCharacterOrganizationDto } from './dto/update-character_organization.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { CharacterOrganization } from './entities/character_organization.entity';

@ApiTags('character-organization')
@Controller('character-organization')
export class CharacterOrganizationController {
  constructor(private readonly characterOrganizationService: CharacterOrganizationService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new character-organization relation',
    description:
      'Creates a relation between a character and an organization based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Character-organization relation successfully created',
    type: CharacterOrganization,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  create(@Body() createCharacterOrganizationDto: CreateCharacterOrganizationDto) {
    return this.characterOrganizationService.create(createCharacterOrganizationDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all character-organization relations',
    description: 'Fetches a list of all character-organization relations.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of character-organization relations retrieved successfully',
    type: [CharacterOrganization],
  })
  findAll() {
    return this.characterOrganizationService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific character-organization relation',
    description: 'Fetches a character-organization relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Character-organization relation retrieved successfully',
    type: CharacterOrganization,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @ApiNotFoundResponse({
    description: 'Character-organization relation not found',
  })
  findOne(@Param('id') id: string) {
    return this.characterOrganizationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific character-organization relation',
    description:
      'Updates the details of a character-organization relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Character-organization relation updated successfully',
    type: CharacterOrganization,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Character-organization relation not found',
  })
  update(
    @Param('id') id: string,
    @Body() updateCharacterOrganizationDto: UpdateCharacterOrganizationDto,
  ) {
    return this.characterOrganizationService.update(id, updateCharacterOrganizationDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific character-organization relation',
    description: 'Removes a character-organization relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Character-organization relation deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Character-organization relation not found',
  })
  remove(@Param('id') id: string) {
    return this.characterOrganizationService.remove(id);
  }
}
