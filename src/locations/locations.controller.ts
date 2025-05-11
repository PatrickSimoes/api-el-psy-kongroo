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
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Location } from './entities/location.entity';

@ApiTags('locations')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new location',
    description: 'Creates a location based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Location successfully created',
    type: Location,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.create(createLocationDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all locations',
    description: 'Fetches a list of all locations.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of locations retrieved successfully',
    type: [Location],
  })
  findAll() {
    return this.locationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific location',
    description: 'Fetches a location by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Location retrieved successfully',
    type: Location,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @ApiNotFoundResponse({
    description: 'Location not found',
  })
  findOne(@Param('id') id: string) {
    return this.locationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific location',
    description: 'Updates the details of a location by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Location updated successfully',
    type: Location,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Location not found',
  })
  update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationsService.update(id, updateLocationDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific location',
    description: 'Removes a location by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Location deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Location not found',
  })
  remove(@Param('id') id: string) {
    return this.locationsService.remove(id);
  }
}
