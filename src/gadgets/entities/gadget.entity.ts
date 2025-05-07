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
import { Character } from 'src/characters/entities/character.entity';
import { GadgetCharacter } from 'src/gadget_character/entities/gadget_character.entity';

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

  @BelongsToMany(() => Character, () => GadgetCharacter)
  characters: Character[];
}
