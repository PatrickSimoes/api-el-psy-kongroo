import { Response } from 'express';
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';
import { CharactersService } from './characters.service';
import { Character } from './entities/character.entity';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@ApiTags('Characters')
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new character',
    description: 'Creates a Character based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Character successfully created',
    type: Character,
  })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @ApiConflictResponse({ description: 'A character with this email already exists' })
  async create(@Body() dto: CreateCharacterDto): Promise<Character> {
    return this.charactersService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all characters',
    description: 'Fetches an array of all Characters.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Array of characters',
    type: Character,
    isArray: true,
  })
  async findAll(): Promise<Character[]> {
    return this.charactersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a character by ID',
    description: 'Retrieves a single Character by its UUID.',
  })
  @ApiParam({
    name: 'id',
    description: 'UUID of the character',
    example: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Character found', type: Character })
  @ApiNotFoundResponse({ description: 'Character not found' })
  async findOne(@Param('id') id: string): Promise<Character> {
    return this.charactersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Replace a character by ID',
    description: 'Replaces or creates a Character.',
  })
  @ApiParam({ name: 'id', description: 'UUID of the character' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Character replaced', type: Character })
  @ApiCreatedResponse({ description: 'Character created', type: Character })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @ApiConflictResponse({ description: 'A character with this email already exists' })
  async replace(@Param('id') id: string, @Body() dto: CreateCharacterDto, @Res() res: Response) {
    const { entity, created } = await this.charactersService.replace(id, dto);

    if (created) {
      return res.status(HttpStatus.CREATED).json(entity);
    } else {
      return res.status(HttpStatus.OK).json(entity);
    }
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a character partially',
    description: 'Updates one or more fields of an existing Character.',
  })
  @ApiParam({ name: 'id', description: 'UUID of the character' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Character updated', type: Character })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @ApiNotFoundResponse({ description: 'Character not found' })
  async update(@Param('id') id: string, @Body() dto: UpdateCharacterDto): Promise<Character> {
    return this.charactersService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a character by ID',
    description: 'Deletes an existing Character.',
  })
  @ApiParam({ name: 'id', description: 'UUID of the character' })
  @ApiNoContentResponse({ description: 'Character successfully deleted' })
  @ApiNotFoundResponse({ description: 'Character not found' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.charactersService.destroy(id);
  }
}
