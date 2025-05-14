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
import { CharacterLocation } from 'src/character_location/entities/character_location.entity';
import { Character } from 'src/characters/entities/character.entity';

@Table({
  tableName: 'locations',
  underscored: true,
  timestamps: true,
})
export class Location extends Model<Location> {
  @PrimaryKey
  @Default(DataType.UUID)
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

  @BelongsToMany(() => Character, () => CharacterLocation)
  characters: Character[];
}
