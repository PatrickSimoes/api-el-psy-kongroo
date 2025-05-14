import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript';
import { CharacterEpisode } from 'src/character_episode/entities/character_episode.entity';
import { Character } from 'src/characters/entities/character.entity';
import { EpisodeWorldline } from 'src/episode_worldline/entities/episode_worldline.entity';
import { Worldline } from 'src/worldlines/entities/worldline.entity';

@Table({
  tableName: 'episodes',
  underscored: true,
  timestamps: true,
})
export class Episode extends Model<Episode> {
  @PrimaryKey
  @Default(DataType.UUID)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  description?: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  season: number;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER, field: 'episode_number' })
  episodeNumber: number;

  @AllowNull(true)
  @Column({ type: DataType.DATE, field: 'air_date' })
  airDate?: Date;

  @AllowNull(true)
  @Column({ type: DataType.INTEGER, comment: 'duration in minutes' })
  duration?: number;

  @AllowNull(true)
  @Column({ type: DataType.FLOAT, comment: 'average rating' })
  rating?: number;

  @BelongsToMany(() => Character, () => CharacterEpisode)
  characters: Character[];

  @BelongsToMany(() => Worldline, () => EpisodeWorldline)
  worldlines: Worldline[];
}
