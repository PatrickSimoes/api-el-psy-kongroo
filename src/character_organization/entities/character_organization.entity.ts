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
import { Character } from 'src/characters/entities/character.entity';
import { Organization } from 'src/organizations/entities/organization.entity';

@Table
export class CharacterOrganization extends Model {
  @PrimaryKey
  @Default(DataType.UUID)
  @Column
  declare id: string;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  characterId: number;

  @ForeignKey(() => Organization)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  organizationId: number;

  @BelongsTo(() => Character)
  character: Character;

  @BelongsTo(() => Organization)
  organization: Organization;
}
