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
  tableName: 'gadgets',
  underscored: true,
  timestamps: true,
})
export class Gadget extends Model<Gadget> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  description?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  model: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  manufacturer?: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  serialNumber?: string;

  @AllowNull(true)
  @Column({ type: DataType.DATE })
  releaseDate?: Date;
}
