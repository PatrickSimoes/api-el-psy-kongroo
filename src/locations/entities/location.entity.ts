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
  tableName: 'locations',
  underscored: true,
  timestamps: true,
})
export class Location extends Model<Location> {
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

  @Column
  city: string;

  @Column
  country: string;

  @AllowNull(true)
  @Column(DataType.FLOAT)
  latitude?: number;

  @AllowNull(true)
  @Column(DataType.FLOAT)
  longitude?: number;
}
