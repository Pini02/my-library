import { Module } from '@nestjs/common';
import { LibraryAdminController } from './library-admin.controller';
import { LibraryAdminService } from './library-admin.service';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { UsersAdminModule } from './users-admin/users-admin.module';
import { RentModule } from './rent/rent.module';

@Module({
  imports: [BooksModule, AuthModule, UsersAdminModule, RentModule],
  controllers: [LibraryAdminController],
  providers: [LibraryAdminService],
})
export class LibraryAdminModule {}
