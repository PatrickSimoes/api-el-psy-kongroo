import {
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Character } from 'src/characters/entities/character.entity';
import { Location } from 'src/locations/entities/location.entity';

@Table
export class CharacterLocation extends Model {
  @PrimaryKey
  @Default(DataType.UUID)
  @Column
  declare id: string;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  characterId: string;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  locationId: string;
}
