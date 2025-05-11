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
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Organization } from './entities/organization.entity';

@ApiTags('organizations')
@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new organization',
    description: 'Creates an organization based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Organization successfully created',
    type: Organization,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all organizations',
    description: 'Fetches a list of all organizations.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of organizations retrieved successfully',
    type: [Organization],
  })
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific organization',
    description: 'Fetches an organization by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Organization retrieved successfully',
    type: Organization,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @ApiNotFoundResponse({
    description: 'Organization not found',
  })
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific organization',
    description: 'Updates the details of an organization by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Organization updated successfully',
    type: Organization,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Organization not found',
  })
  update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationsService.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific organization',
    description: 'Removes an organization by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Organization deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Organization not found',
  })
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(id);
  }
}
