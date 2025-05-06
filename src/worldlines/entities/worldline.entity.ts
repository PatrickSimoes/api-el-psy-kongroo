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
  tableName: 'wordlines',
  underscored: true,
  timestamps: true,
})
export class Wordline extends Model<Wordline> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
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
}
