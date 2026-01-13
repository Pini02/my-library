import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { UsersAdminModule } from './users-admin/users-admin.module';
import { RentModule } from './rent/rent.module';
import { ConnectionModule } from '@app/connection';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    BooksModule,
    AuthModule,
    UsersAdminModule,
    RentModule,
    ConnectionModule,
    UsersModule,
  ],
})
export class LibraryAdminModule {}
