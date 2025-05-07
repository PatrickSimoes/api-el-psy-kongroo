import { Module } from '@nestjs/common';
import { CharacterLocationService } from './character_location.service';
import { CharacterLocationController } from './character_location.controller';
import { CharacterLocation } from './entities/character_location.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([CharacterLocation])],
  controllers: [CharacterLocationController],
  providers: [CharacterLocationService],
})
export class CharacterLocationModule {}
