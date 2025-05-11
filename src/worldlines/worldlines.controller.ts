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
import { WorldlinesService } from './worldlines.service';
import { CreateWorldlineDto } from './dto/create-worldline.dto';
import { UpdateWorldlineDto } from './dto/update-worldline.dto';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Worldline } from './entities/worldline.entity';

@ApiTags('worldlines')
@Controller('worldlines')
export class WorldlinesController {
  constructor(private readonly worldlinesService: WorldlinesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new worldline',
    description: 'Creates a worldline based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Worldline successfully created',
    type: Worldline,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiConflictResponse({
    description: 'A worldline already exists',
  })
  // create(@Body() dto: CreateWorldlineDto): Promise<Worldline> {
  create(@Body() dto: CreateWorldlineDto) {
    return this.worldlinesService.create(dto);
  }

  @ApiOperation({
    summary: 'Retrieve all worldlines',
    description: 'Fetches a list of all worldlines.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of worldlines retrieved successfully',
    type: [Worldline],
  })
  @Get()
  findAll() {
    return this.worldlinesService.findAll();
  }

  @ApiOperation({
    summary: 'Retrieve a specific worldline',
    description: 'Fetches a worldline by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Worldline retrieved successfully',
    type: Worldline,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worldlinesService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Update a specific worldline',
    description: 'Updates the details of a worldline by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Worldline updated successfully',
    type: Worldline,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Worldline not found',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorldlineDto: UpdateWorldlineDto) {
    return this.worldlinesService.update(+id, updateWorldlineDto);
  }

  @ApiOperation({
    summary: 'Delete a specific worldline',
    description: 'Removes a worldline by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Worldline deleted successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Worldline not found',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worldlinesService.remove(+id);
  }
}
