import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Character } from 'src/characters/entities/character.entity';
import { Episode } from 'src/episodes/entities/episode.entity';

@Table({
  tableName: 'characters_episodes',
  underscored: true,
  timestamps: true,
})
export class CharacterEpisode extends Model {
  @ForeignKey(() => Character)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    field: 'character_id',
  })
  characterId: string;

  @ForeignKey(() => Episode)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    field: 'episode_id',
  })
  episodeId: string;
}
