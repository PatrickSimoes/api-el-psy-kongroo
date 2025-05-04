import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CharactersModule } from './characters/characters.module';
import { EpisodesModule } from './episodes/episodes.module';
import { LocationsModule } from './locations/locations.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { GadgetsModule } from './gadgets/gadgets.module';
import { WorldlinesModule } from './worldlines/worldlines.module';
import { CharacterEpisodeModule } from './character_episode/character_episode.module';
import { CharacterLocationModule } from './character_location/character_location.module';
import { CharacterOrganizationModule } from './character_organization/character_organization.module';
import { EpisodeWorldlineModule } from './episode_worldline/episode_worldline.module';
import { GadgetCharacterModule } from './gadget_character/gadget_character.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    CharactersModule,
    EpisodesModule,
    LocationsModule,
    OrganizationsModule,
    GadgetsModule,
    WorldlinesModule,
    CharacterEpisodeModule,
    CharacterLocationModule,
    CharacterOrganizationModule,
    EpisodeWorldlineModule,
    GadgetCharacterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
