import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

export const PG_CONNECTION = 'PG_CONNECTION';

export const dbProvider = {
  provide: PG_CONNECTION,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    return new Pool({
      user: config.get('DBUSER'),
      host: config.get('DBHOST'),
      database: config.get('DBNAME'),
      password: config.get('DBPASS'),
      port: Number(config.get('DBPORT')),
    });
  },
};
