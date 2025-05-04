import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (config: ConfigService): Promise<Sequelize> => {
      const dbUrl = config.get<string>('DB_URL');

      const models = [];

      let sequelize: Sequelize;

      if (dbUrl) {
        sequelize = new Sequelize(dbUrl, {
          dialect: 'postgres',
          models,
        });
      } else {
        sequelize = new Sequelize({
          dialect: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          database: config.get<string>('DB_NAME'),
          username: config.get<string>('DB_USER'),
          password: config.get<string>('DB_PASSWORD'),
          models,
        });
      }

      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
