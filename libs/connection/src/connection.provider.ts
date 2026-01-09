import { DataSource } from 'typeorm';
import { User } from './entities/users.entity';
import { UserAdmin } from './entities/user_admin.entity';
import { Book } from './entities/book.entity';
import { Rent } from './entities/rent.entity';

export const ConnectionProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'example',
        database: 'library',
        entities: [User, UserAdmin, Book, Rent],
      });
      return dataSource.initialize();
    },
  },
];
