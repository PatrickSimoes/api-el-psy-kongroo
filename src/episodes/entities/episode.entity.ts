import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'episodes',
  underscored: true,
  timestamps: true,
})
export class Episode extends Model<Episode> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  description?: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  season!: number;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER, field: 'episode_number' })
  episodeNumber!: number;

  @AllowNull(true)
  @Column({ type: DataType.DATE, field: 'air_date' })
  airDate?: Date;

  @AllowNull(true)
  @Column({ type: DataType.INTEGER, comment: 'duration in minutes' })
  duration?: number;

  @AllowNull(true)
  @Column({ type: DataType.FLOAT, comment: 'average rating' })
  rating?: number;
}
