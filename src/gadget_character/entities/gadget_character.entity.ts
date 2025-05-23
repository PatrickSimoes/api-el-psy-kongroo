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
import { Gadget } from 'src/gadgets/entities/gadget.entity';
import { Character } from 'src/characters/entities/character.entity';

@Table
export class GadgetCharacter extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUIDV4)
  declare id: string;

  @ForeignKey(() => Gadget)
  @Column({
    type: DataType.UUIDV4,
    allowNull: false,
  })
  gadgetId: string;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.UUIDV4,
    allowNull: false,
  })
  characterId: string;

  @BelongsTo(() => Gadget)
  gadget: Gadget;

  @BelongsTo(() => Character)
  character: Character;
}
