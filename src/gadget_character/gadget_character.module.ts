import { Module } from '@nestjs/common';
import { GadgetCharacterService } from './gadget_character.service';
import { GadgetCharacterController } from './gadget_character.controller';

@Module({
  controllers: [GadgetCharacterController],
  providers: [GadgetCharacterService],
})
export class GadgetCharacterModule {}
