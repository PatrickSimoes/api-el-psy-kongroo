import { Module } from '@nestjs/common';
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
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    ThrottlerModule.forRoot([
      {
        name: 'short', // The configuration allows up to 3 requests per second.
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'medium', // The configuration allows up 20 requests every 10 seconds.
        ttl: 10000,
        limit: 20,
      },
      {
        name: 'long', // The configuration allows up 100 requests per minute.
        ttl: 60000,
        limit: 100,
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    UsersModule,
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
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
