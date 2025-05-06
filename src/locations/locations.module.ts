import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Location } from './entities/location.entity';

@Module({
  imports: [SequelizeModule.forFeature([Location])],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
