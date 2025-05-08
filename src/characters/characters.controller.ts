import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { CharactersService } from './characters.service';
import { Character } from './entities/character.entity';
import { CreateCharacterDto } from './dto/create-character.dto';

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
    status: 201,
    description: 'Character successfully created',
    type: Character,
  })
  @ApiBadRequestResponse({ description: 'Invalid input data' })
  @ApiConflictResponse({
    description: 'A character with this email already exists',
  })
  async create(@Body() dto: CreateCharacterDto): Promise<Character> {
    return this.charactersService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all characters',
    description: 'Fetches an array of all Characters.',
  })
  @ApiResponse({
    status: 200,
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
  @ApiResponse({
    status: 200,
    description: 'Character found',
    type: Character,
  })
  @ApiNotFoundResponse({ description: 'Character not found' })
  async findOne(@Param('id') id: string): Promise<Character> {
    return this.charactersService.findOne(id);
  }
}
