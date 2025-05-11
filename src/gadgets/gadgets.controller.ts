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
import { GadgetsService } from './gadgets.service';
import { CreateGadgetDto } from './dto/create-gadget.dto';
import { UpdateGadgetDto } from './dto/update-gadget.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Gadget } from './entities/gadget.entity';

@ApiTags('gadgets')
@Controller('gadgets')
export class GadgetsController {
  constructor(private readonly gadgetsService: GadgetsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new gadget',
    description: 'Creates a gadget based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Gadget successfully created',
    type: Gadget,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  create(@Body() createGadgetDto: CreateGadgetDto) {
    return this.gadgetsService.create(createGadgetDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all gadgets',
    description: 'Fetches a list of all gadgets.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of gadgets retrieved successfully',
    type: [Gadget],
  })
  findAll() {
    return this.gadgetsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific gadget',
    description: 'Fetches a gadget by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Gadget retrieved successfully',
    type: Gadget,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @ApiNotFoundResponse({
    description: 'Gadget not found',
  })
  findOne(@Param('id') id: string) {
    return this.gadgetsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific gadget',
    description: 'Updates the details of a gadget by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Gadget updated successfully',
    type: Gadget,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Gadget not found',
  })
  update(@Param('id') id: string, @Body() updateGadgetDto: UpdateGadgetDto) {
    return this.gadgetsService.update(+id, updateGadgetDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific gadget',
    description: 'Removes a gadget by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Gadget deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Gadget not found',
  })
  remove(@Param('id') id: string) {
    return this.gadgetsService.remove(+id);
  }
}
