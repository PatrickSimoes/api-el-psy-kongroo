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
import { EpisodeWorldline } from 'src/episode_worldline/entities/episode_worldline.entity';
import { Episode } from 'src/episodes/entities/episode.entity';

@Table({
  tableName: 'wordlines',
  underscored: true,
  timestamps: true,
})
export class Worldline extends Model {
  @PrimaryKey
  @Default(DataType.UUID)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  word: string;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER, field: 'line_number' })
  lineNumber!: number;

  @AllowNull(true)
  @Column({ type: DataType.INTEGER, comment: 'nth occurrence in the same line' })
  occurrence?: number;

  @BelongsToMany(() => Episode, () => EpisodeWorldline)
  episodes: Episode[];
}
