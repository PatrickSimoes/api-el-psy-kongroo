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
import { GadgetCharacterService } from './gadget_character.service';
import { CreateGadgetCharacterDto } from './dto/create-gadget_character.dto';
import { UpdateGadgetCharacterDto } from './dto/update-gadget_character.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { GadgetCharacter } from './entities/gadget_character.entity';

@ApiTags('gadget-character')
@Controller('gadget-character')
export class GadgetCharacterController {
  constructor(private readonly gadgetCharacterService: GadgetCharacterService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new gadget-character relation',
    description:
      'Creates a relation between a gadget and a character based on the provided payload.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Gadget-character relation successfully created',
    type: GadgetCharacter,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  create(@Body() createGadgetCharacterDto: CreateGadgetCharacterDto) {
    return this.gadgetCharacterService.create(createGadgetCharacterDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retrieve all gadget-character relations',
    description: 'Fetches a list of all gadget-character relations.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of gadget-character relations retrieved successfully',
    type: [GadgetCharacter],
  })
  findAll() {
    return this.gadgetCharacterService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieve a specific gadget-character relation',
    description: 'Fetches a gadget-character relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Gadget-character relation retrieved successfully',
    type: GadgetCharacter,
  })
  @ApiBadRequestResponse({
    description: 'Invalid ID format',
  })
  @ApiNotFoundResponse({
    description: 'Gadget-character relation not found',
  })
  findOne(@Param('id') id: string) {
    return this.gadgetCharacterService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a specific gadget-character relation',
    description: 'Updates the details of a gadget-character relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Gadget-character relation updated successfully',
    type: GadgetCharacter,
  })
  @ApiBadRequestResponse({
    description: 'Invalid input data',
  })
  @ApiNotFoundResponse({
    description: 'Gadget-character relation not found',
  })
  update(@Param('id') id: string, @Body() updateGadgetCharacterDto: UpdateGadgetCharacterDto) {
    return this.gadgetCharacterService.update(id, updateGadgetCharacterDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete a specific gadget-character relation',
    description: 'Removes a gadget-character relation by its unique identifier.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Gadget-character relation deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Gadget-character relation not found',
  })
  remove(@Param('id') id: string) {
    return this.gadgetCharacterService.remove(id);
  }
}
