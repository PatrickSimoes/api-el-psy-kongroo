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
} from 'sequelize-typescript';

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
}
