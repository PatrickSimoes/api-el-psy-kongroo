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
import { CharacterEpisode } from 'src/character_episode/entities/character_episode.entity';
import { CharacterLocation } from 'src/character_location/entities/character_location.entity';
import { CharacterOrganization } from 'src/character_organization/entities/character_organization.entity';
import { Episode } from 'src/episodes/entities/episode.entity';
import { Location } from 'src/locations/entities/location.entity';
import { Organization } from 'src/organizations/entities/organization.entity';

@Table({ tableName: 'characters', timestamps: true, paranoid: true })
export class Character extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  declare id: string;

  @Column
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
  declare deletedAt: Date;

  @BelongsToMany(() => Episode, () => CharacterEpisode)
  episodes: Episode[];

  @BelongsToMany(() => Location, () => CharacterLocation)
  locations: Location[];

  @BelongsToMany(() => Organization, () => CharacterOrganization)
  organizations: Organization[];
}
