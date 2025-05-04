import { Injectable } from '@nestjs/common';
import { CreateGadgetDto } from './dto/create-gadget.dto';
import { UpdateGadgetDto } from './dto/update-gadget.dto';

@Injectable()
export class GadgetsService {
  create(createGadgetDto: CreateGadgetDto) {
    return 'This action adds a new gadget';
  }

  findAll() {
    return `This action returns all gadgets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gadget`;
  }

  update(id: number, updateGadgetDto: UpdateGadgetDto) {
    return `This action updates a #${id} gadget`;
  }

  remove(id: number) {
    return `This action removes a #${id} gadget`;
  }
}
