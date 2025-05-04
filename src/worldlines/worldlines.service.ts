import { Injectable } from '@nestjs/common';
import { CreateWorldlineDto } from './dto/create-worldline.dto';
import { UpdateWorldlineDto } from './dto/update-worldline.dto';

@Injectable()
export class WorldlinesService {
  create(createWorldlineDto: CreateWorldlineDto) {
    return 'This action adds a new worldline';
  }

  findAll() {
    return `This action returns all worldlines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} worldline`;
  }

  update(id: number, updateWorldlineDto: UpdateWorldlineDto) {
    return `This action updates a #${id} worldline`;
  }

  remove(id: number) {
    return `This action removes a #${id} worldline`;
  }
}
