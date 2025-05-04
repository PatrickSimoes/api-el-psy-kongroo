import { Module } from '@nestjs/common';
import { WorldlinesService } from './worldlines.service';
import { WorldlinesController } from './worldlines.controller';

@Module({
  controllers: [WorldlinesController],
  providers: [WorldlinesService],
})
export class WorldlinesModule {}
