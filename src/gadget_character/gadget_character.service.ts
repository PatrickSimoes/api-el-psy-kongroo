import { Injectable } from '@nestjs/common';
import { CreateGadgetCharacterDto } from './dto/create-gadget_character.dto';
import { UpdateGadgetCharacterDto } from './dto/update-gadget_character.dto';

@Injectable()
export class GadgetCharacterService {
  create(createGadgetCharacterDto: CreateGadgetCharacterDto) {
    return 'This action adds a new gadgetCharacter';
  }

  findAll() {
    return `This action returns all gadgetCharacter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gadgetCharacter`;
  }

  update(id: number, updateGadgetCharacterDto: UpdateGadgetCharacterDto) {
    return `This action updates a #${id} gadgetCharacter`;
  }

  remove(id: number) {
    return `This action removes a #${id} gadgetCharacter`;
  }
}
