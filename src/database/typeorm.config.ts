import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'medclinic',
  password: process.env.DB_PASSWORD || 'medclinic123',
  database: process.env.DB_NAME || 'medclinic',
  entities: [User],
  synchronize: true,
};
