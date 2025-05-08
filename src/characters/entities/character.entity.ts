import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { CharacterEpisode } from 'src/character_episode/entities/character_episode.entity';
import { CharacterLocation } from 'src/character_location/entities/character_location.entity';
import { CharacterOrganization } from 'src/character_organization/entities/character_organization.entity';
import { Episode } from 'src/episodes/entities/episode.entity';
import { GadgetCharacter } from 'src/gadget_character/entities/gadget_character.entity';
import { Gadget } from 'src/gadgets/entities/gadget.entity';
import { Location } from 'src/locations/entities/location.entity';
import { Organization } from 'src/organizations/entities/organization.entity';

export interface CharacterAttributes {
  id: string;
  name: string;
  alias?: string;
  birthday?: Date;
  age?: number;
  gender: 'M' | 'F' | 'Other';
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CharacterCreationAttributes = Optional<
  CharacterAttributes,
  'id' | 'alias' | 'birthday' | 'age' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;

@Table({ tableName: 'characters', timestamps: true, paranoid: true })
export class Character
  extends Model<CharacterAttributes, CharacterCreationAttributes>
  implements CharacterAttributes
{
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  declare id: string;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: true })
  declare alias?: string;

  @Column({ allowNull: true })
  declare birthday?: Date;

  @Column({ allowNull: true })
  declare age?: number;

  @Column({ allowNull: false })
  declare gender: 'M' | 'F' | 'Other';

  @CreatedAt
  @Column({ field: 'created_at' })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  declare updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  declare deletedAt?: Date;

  @BelongsToMany(() => Episode, () => CharacterEpisode)
  declare episodes: Episode[];

  @BelongsToMany(() => Location, () => CharacterLocation)
  declare locations: Location[];

  @BelongsToMany(() => Organization, () => CharacterOrganization)
  declare organizations: Organization[];

  @BelongsToMany(() => Gadget, () => GadgetCharacter)
  declare gadgets: Gadget[];
}
