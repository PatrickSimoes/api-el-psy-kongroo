import { Module } from '@nestjs/common';
import { CharacterLocationService } from './character_location.service';
import { CharacterLocationController } from './character_location.controller';

@Module({
  controllers: [CharacterLocationController],
  providers: [CharacterLocationService],
})
export class CharacterLocationModule {}
