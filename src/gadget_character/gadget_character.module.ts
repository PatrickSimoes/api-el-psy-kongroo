import { Module } from '@nestjs/common';
import { GadgetCharacterService } from './gadget_character.service';
import { GadgetCharacterController } from './gadget_character.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GadgetCharacter } from './entities/gadget_character.entity';

@Module({
  imports: [SequelizeModule.forFeature([GadgetCharacter])],
  controllers: [GadgetCharacterController],
  providers: [GadgetCharacterService],
})
export class GadgetCharacterModule {}
