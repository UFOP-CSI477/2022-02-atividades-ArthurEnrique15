// @ts-nocheck
import { DataSource } from 'typeorm';

import 'dotenv/config';

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  database: 'db_atv1',
  entities: ['./src/database/entities/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: { migrationsDir: './src/database/migrations' },
  // logging: true,
});

// establish database connection
dataSource.initialize()
  .then(() => console.log('Data Source has been initialized!'))
  .catch((err) => console.error('Error during Data Source initialization:', err));
