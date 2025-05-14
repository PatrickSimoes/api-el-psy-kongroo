import { Table, Column, Model, PrimaryKey, Default, DataType, Unique } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUID)
  @Column(DataType.UUID)
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { len: [1, 100] },
  })
  name: string;

  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { isEmail: true },
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
  })
  isGoogleAccount: boolean;
}
