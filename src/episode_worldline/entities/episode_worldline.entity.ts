import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';
import { Episode } from 'src/episodes/entities/episode.entity';
import { Worldline } from 'src/worldlines/entities/worldline.entity';

@Table
export class EpisodeWorldline extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @ForeignKey(() => Episode)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  episodeId: string;

  @ForeignKey(() => Worldline)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  worldlineId: string;

  @BelongsTo(() => Episode)
  episode: Episode;

  @BelongsTo(() => Worldline)
  worldline: Worldline;
}
