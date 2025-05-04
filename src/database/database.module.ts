import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { URL } from 'url';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): SequelizeModuleOptions => {
        const dbUrl = config.get<string>('DB_URL');
        const commonOptions = {
          dialect: 'postgres' as const,
          autoLoadModels: true,
          synchronize: config.get<string>('NODE_ENV') === 'development',
          logging: config.get<string>('NODE_ENV') === 'development',
          timezone: '-03:00',
          define: {
            underscored: true,
            freezeTableName: false,
            timestamps: true,
          },
        };

        if (dbUrl) {
          const parsed = new URL(dbUrl);
          return {
            host: parsed.hostname,
            port: parseInt(parsed.port, 10),
            username: parsed.username,
            password: parsed.password,
            database: parsed.pathname.slice(1),
            ...commonOptions,
          };
        }

        return {
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USER'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_NAME'),
          ...commonOptions,
        };
      },
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
