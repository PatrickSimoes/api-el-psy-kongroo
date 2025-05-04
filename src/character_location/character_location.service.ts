import { Injectable } from '@nestjs/common';
import { CreateCharacterLocationDto } from './dto/create-character_location.dto';
import { UpdateCharacterLocationDto } from './dto/update-character_location.dto';

@Injectable()
export class CharacterLocationService {
  create(createCharacterLocationDto: CreateCharacterLocationDto) {
    return 'This action adds a new characterLocation';
  }

  findAll() {
    return `This action returns all characterLocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characterLocation`;
  }

  update(id: number, updateCharacterLocationDto: UpdateCharacterLocationDto) {
    return `This action updates a #${id} characterLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} characterLocation`;
  }
}
