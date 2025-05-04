import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Character } from './entities/character.entity';

@Module({
  imports: [SequelizeModule.forFeature([Character])],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}
