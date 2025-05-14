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
import { CharacterOrganization } from 'src/character_organization/entities/character_organization.entity';
import { Character } from 'src/characters/entities/character.entity';

@Table({
  tableName: 'organizations',
  underscored: true,
  timestamps: true,
})
export class Organization extends Model<Organization> {
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

  @AllowNull(false)
  @Column(DataType.STRING)
  address: string;

  @BelongsToMany(() => Character, () => CharacterOrganization)
  characters: Character[];
}
