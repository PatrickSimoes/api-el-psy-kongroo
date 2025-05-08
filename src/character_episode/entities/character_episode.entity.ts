import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';
import { Character } from 'src/characters/entities/character.entity';
import { Episode } from 'src/episodes/entities/episode.entity';

@Table({
  tableName: 'characters_episodes',
  underscored: true,
  timestamps: true,
})
export class CharacterEpisode extends Model<CharacterEpisode> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUIDV4 })
  declare id: string;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.UUIDV4,
    allowNull: false,
    field: 'character_id',
  })
  characterId!: string;

  @ForeignKey(() => Episode)
  @Column({
    type: DataType.UUIDV4,
    allowNull: false,
    field: 'episode_id',
  })
  episodeId!: string;
}
