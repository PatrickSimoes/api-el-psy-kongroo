import { Injectable } from '@nestjs/common';
import { CreateEpisodeWorldlineDto } from './dto/create-episode_worldline.dto';
import { UpdateEpisodeWorldlineDto } from './dto/update-episode_worldline.dto';

@Injectable()
export class EpisodeWorldlineService {
  create(createEpisodeWorldlineDto: CreateEpisodeWorldlineDto) {
    return 'This action adds a new episodeWorldline';
  }

  findAll() {
    return `This action returns all episodeWorldline`;
  }

  findOne(id: number) {
    return `This action returns a #${id} episodeWorldline`;
  }

  update(id: number, updateEpisodeWorldlineDto: UpdateEpisodeWorldlineDto) {
    return `This action updates a #${id} episodeWorldline`;
  }

  remove(id: number) {
    return `This action removes a #${id} episodeWorldline`;
  }
}
